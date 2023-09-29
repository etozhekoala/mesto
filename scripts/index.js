import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';
import { validationOptions } from '../utils/utils.js';

const profileInfo = document.querySelector('.profile__profile-info');
const cardContainer = document.querySelector('.elements__items');

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
const fullscreenImage = fullscreenPopup.querySelector('.popup__image-fullscreen');
const fullscreenTitleCard = fullscreenPopup.querySelector('.popup__fullscreen-title');
const fullscreenCloseButton = fullscreenPopup.querySelector('.popup__button-close_type_fullscreen');

const validateAddForm = new FormValidator(validationOptions, addCardPopup);
  validateAddForm.enableValidation();

const validateEditForm = new FormValidator(validationOptions, editProfilePopup);
  validateEditForm.enableValidation();

const handleAddCardFormSubmit = (event) => {
  event.preventDefault();
  const name = addCardTitleInput.value;
  const link = addCardLinkInput.value;

  const newCardData = {
    name, link,
  };

  cardContainer.prepend(createCard(newCardData));
  closePopup(addCardPopup);
  addCardEditForm.reset();
};


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

function createCard (data) {
  const cardElement = new Card("#elements__template-item", data, handleOpenPopup);
  const cardAdd = cardElement.createCardElement()
  return cardAdd;
};

function handleOpenPopup(name, link) {
  fullscreenImage.src = link;
  fullscreenImage.alt = name;
  fullscreenTitleCard.textContent = name;
  openPopup(fullscreenPopup);
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

initialCards.forEach((card) => {
  cardContainer.prepend(createCard(card));
});

editProfileButtonOpen.addEventListener('click', () => {
  openProfileEditForm(editProfilePopup);
  validateEditForm.resetValidation();
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
  validateAddForm.resetValidation();
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