const popup = document.querySelector('.popup');
const editForm = document.querySelector('.popup__edit-profile');
const addCardForm = document.querySelector('.popup__add-card');
const popupForm = popup.querySelector('.popup__form');
const formEditTitleCard = document.querySelector('.popup__form_type_add-card');


const nameInput = popup.querySelector('.popup__form-input_type_name');
const jobInput = popup.querySelector('.popup__form-input_type_job')

const btnAddCard = document.querySelector('.profile__add-button');
const btnOpen = document.querySelector('.profile__edit-button');
const btnClose = popup.querySelector('.popup__button-close');

const authorName = document.querySelector('.profile__author-name');
const authorJob = document.querySelector('.profile__author-description');


const titleInput = formEditTitleCard.querySelector('.popup__form-input_type_title');
const linkInput = formEditTitleCard.querySelector('.popup__form-input_type_link');

// Универсальное открытие и закрытие попапов

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

// Работа с попапом редактирования профиля

function openForm() {
  openPopup(editForm)
  
  nameInput.value = authorName.textContent;
  jobInput.value = authorJob.textContent;
}

function handleFormSubmit (event) {
  
  event.preventDefault();
  
  authorName.textContent = nameInput.value;
  authorJob.textContent = jobInput.value;
  
  closePopup(editForm)

}


// Работа с попапом добавления карточек


btnOpen.addEventListener('click', () => {
  openForm(editForm);
})

btnClose.addEventListener('click', () => {
  closePopup(editForm);
})

btnAddCard.addEventListener('click', () => {
  openPopup(addCardForm);
})

btnClose.addEventListener('click', () => {
  closePopup(addCardForm);
})

popupForm.addEventListener('submit', handleFormSubmit);



// function openForm() {
//   popup.classList.add('popup_opened');
  
//   nameInput.value = authorName.textContent;
//   jobInput.value = authorJob.textContent;
  
// }

// function closeForm() {

//   popup.classList.remove('popup_opened');

// }

// function handleFormSubmit (event) {
  
//   event.preventDefault();
  
//   authorName.textContent = nameInput.value;
//   authorJob.textContent = jobInput.value;
  
//   closeForm()
// }


// btnOpen.addEventListener('click', openForm);  
// btnClose.addEventListener('click', closeForm);
// popupForm.addEventListener('submit', handleFormSubmit);

const templateItem = document.querySelector('.template__item');
const cardContainer = document.querySelector('.elements__items');



const createCardElement = (cardData) => {
  const cardElement = templateItem.content.querySelector('.elements__item').cloneNode(true);

  const cardName = cardElement.querySelector('.elements__item-title');
  const cardImage = cardElement.querySelector('.elements__image');

  cardName.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  const deleteBtn = cardElement.querySelector('.elements__delete-button');
  const handleDelete = () => {
    cardElement.remove();
  }
  deleteBtn.addEventListener('click', handleDelete);

  const likeBtn = cardElement.querySelector('.elements__like-button');
  const handleLike = () => {
    likeBtn.classList.toggle('elements__like-button_active')
  }

  likeBtn.addEventListener('click', handleLike);

  return cardElement;
}

const renderCardElement = (cardElement) => {
  cardContainer.prepend(cardElement);
}

initialCards.forEach((card) => { 
  renderCardElement(createCardElement(card));
})


// Добавление новых карточек

const handlerEditCardSubmit = (event) => {
  event.preventDefault();


  const name = titleInput.value;
  const link = linkInput.value;

  const newCardData = {
    name, link,
  };

  renderCardElement(createCardElement(newCardData));
  closePopup(addCardForm);
  formEditTitleCard.reset()
};

formEditTitleCard.addEventListener('submit', handlerEditCardSubmit);
