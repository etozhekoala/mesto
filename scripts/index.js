const profileInfo = document.querySelector('.profile__profile-info');
const cardContainer = document.querySelector('.elements__items');
const templateItem = document.querySelector('.elements__template-item');

const editProfileButtonOpen = document.querySelector('.profile__edit-button');
const editProfilePopup = document.querySelector('.popup_type_edit-profile');
const editProfileButtonClose = editProfilePopup.querySelector('.popup__button-close_type_edit-popup');
const editProfileForm = editProfilePopup.querySelector('.popup__form_type_profile-edit');
const editProfileNameInput = editProfilePopup.querySelector('.popup__form-input_type_name');
const editProfileJobInput = editProfilePopup.querySelector('.popup__form-input_type_job');
const editProfileAuthorName = profileInfo.querySelector('.profile__author-name');
const editProfileAuthorJob = profileInfo.querySelector('.profile__author-description');

const addCardButtonOpen = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_type_add-card');
const addCardButtonClose = addCardPopup.querySelector('.popup__button-close_type_add-card');
const addCardEditForm = addCardPopup.querySelector('.popup__form_type_add-card');
const addCardTitleInput = addCardEditForm.querySelector('.popup__form-input_type_title');
const addCardLinkInput = addCardEditForm.querySelector('.popup__form-input_type_link');

const fullscreenPopup = document.querySelector('.popup_type_fullscreen');
const fullscreenCloseButton = fullscreenPopup.querySelector('.popup__button-close_type_fullscreen');
const fullscreenImage = fullscreenPopup.querySelector('.popup__image-fullscreen');
const fullscreenTitleCard = fullscreenPopup.querySelector('.popup__fullscreen-title');

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByEsc);
};

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByEsc);
};

const closePopupByEsc = (event) => {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
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

    fullscreenImage.src = cardImage.src;
    fullscreenImage.alt = cardName.textContent;
    fullscreenTitleCard.textContent = cardName.textContent;
    openPopup(fullscreenPopup);
  };

  cardImage.addEventListener('click', handleFullScreen);

  return cardElement;
};

const renderCardElement = (cardElement) => {
  cardContainer.append(cardElement);
};

initialCards.forEach((card) => {
  renderCardElement(createCardElement(card));
});

const handleAddCardFormSubmit = (event) => {
  event.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;

  const newCardData = {
    name, link,
  };

  cardContainer.prepend(createCardElement(newCardData));
  closePopup(addCardPopup);
  addCardEditForm.reset();
  disabledSubmitAddCard(addCardPopup);
};

function openProfileEditForm() {
  openPopup(editProfilePopup);

  editProfileNameInput.value = editProfileAuthorName.textContent;
  editProfileJobInput.value = editProfileAuthorJob.textContent;
};

function handleProfileFormSubmit (event) {

  event.preventDefault();

  editProfileAuthorName.textContent = editProfileNameInput.value;
  editProfileAuthorJob.textContent = editProfileJobInput.value;

  closePopup(editProfilePopup);
};

editProfileButtonOpen.addEventListener('click', () => {
  openProfileEditForm(editProfilePopup);
});

editProfileButtonClose.addEventListener('click', () => {
  closePopup(editProfilePopup);
});

editProfilePopup.addEventListener('click', (event) => {
  if (event.target === editProfilePopup) {
    closePopup(editProfilePopup);
  }
});

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardButtonOpen.addEventListener('click', () => {
  openPopup(addCardPopup);
});

addCardButtonClose.addEventListener('click', () => {
  closePopup(addCardPopup);
});

addCardPopup.addEventListener('click', (event) => {
  if (event.target === addCardPopup) {
    closePopup(addCardPopup);
  }
});

addCardEditForm.addEventListener('submit', handleAddCardFormSubmit);

fullscreenCloseButton.addEventListener('click', () => {
  closePopup(fullscreenPopup);
});

fullscreenPopup.addEventListener('click', (event) => {
  if (event.target === fullscreenPopup) {
    closePopup(fullscreenPopup);
  }
});

const disabledSubmitAddCard = () => {
  const button = addCardEditForm.querySelector('.popup__button-submit');
  button.classList.add('popup__button-submit_disabled');
  button.setAttribute("disabled", true);
};