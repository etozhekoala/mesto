const popup = document.querySelector('.popup');
const editForm = document.querySelector('.edit-profile');
const addCardForm = document.querySelector('.add-card');
const popupForm = popup.querySelector('.popup__form');
const formEditTitleCard = document.querySelector('.popup__form_type_add-card');

const nameInput = popup.querySelector('.popup__form-input_type_name');
const jobInput = popup.querySelector('.popup__form-input_type_job')

const btnAddCard = document.querySelector('.profile__add-button');
const btnOpen = document.querySelector('.profile__edit-button');
const btnClose = popup.querySelector('.popup__button-close');
const closeAddCard = addCardForm.querySelector('.popup__button-close')

const authorName = document.querySelector('.profile__author-name');
const authorJob = document.querySelector('.profile__author-description');

const titleInput = formEditTitleCard.querySelector('.popup__form-input_type_title');
const linkInput = formEditTitleCard.querySelector('.popup__form-input_type_link');

const templateItem = document.querySelector('.elements__template-item');
const cardContainer = document.querySelector('.elements__items');

const popupFullscreen = document.querySelector('.fullscreen');
const fullImage = popupFullscreen.querySelector('.popup__image-fullscreen');
const fullTitleCard = document.querySelector('.popup__fullscreen-title');
const fullscreenCloseBtn = popupFullscreen.querySelector('.popup__button-close')

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

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
  };
  deleteBtn.addEventListener('click', handleDelete);

  const likeBtn = cardElement.querySelector('.elements__like-button');
  const handleLike = () => {
    likeBtn.classList.toggle('elements__like-button_active');
  };

  likeBtn.addEventListener('click', handleLike);

  const handleFullScreen = () => {
    
    fullImage.src = cardImage.src;
    fullImage.alt = cardName.textContent;
    fullTitleCard.textContent = cardName.textContent;
    openPopup(popupFullscreen);
  }

  cardImage.addEventListener('click', handleFullScreen);

  return cardElement;
};

  const renderCardElement = (cardElement) => {
    cardContainer.prepend(cardElement);
}

  initialCards.forEach((card) => { 
    renderCardElement(createCardElement(card));
})

const handlerEditCardSubmit = (event) => {
  event.preventDefault();

  const name = titleInput.value;
  const link = linkInput.value;

  const newCardData = {
    name, link,
  };

  renderCardElement(createCardElement(newCardData));
  closePopup(addCardForm);
  formEditTitleCard.reset();
};

function openForm() {
  openPopup(editForm);
  
  nameInput.value = authorName.textContent;
  jobInput.value = authorJob.textContent;
}

function handleFormSubmit (event) {
  
  event.preventDefault();
  
  authorName.textContent = nameInput.value;
  authorJob.textContent = jobInput.value;

  closePopup(editForm);

};

btnOpen.addEventListener('click', () => {
  openForm(editForm);
});

btnClose.addEventListener('click', () => {
  closePopup(editForm);
});

btnClose.addEventListener('click', () => {
  closePopup(addCardForm);
});

closeAddCard.addEventListener('click', () => {
  closePopup(addCardForm);
});

btnAddCard.addEventListener('click', () => {
  openPopup(addCardForm);
});

popupForm.addEventListener('submit', handleFormSubmit);

formEditTitleCard.addEventListener('submit', handlerEditCardSubmit);

fullscreenCloseBtn.addEventListener('click', () => {
  closePopup(popupFullscreen);
});

