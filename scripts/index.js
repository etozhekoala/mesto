import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards } from './cards.js';
import { openPopup, closePopup, enableValidation } from '../utils/utils.js';

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
const fullscreenCloseButton = fullscreenPopup.querySelector('.popup__button-close_type_fullscreen');

const validateAddForm = new FormValidator(enableValidation, addCardPopup);
  validateAddForm.enableValidation();

const validateEditForm = new FormValidator(enableValidation, editProfilePopup);
  validateEditForm.enableValidation();

initialCards.forEach((card) => {
  cardContainer.prepend(createCard(card));
});

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

function createCard (data) {
  const cardElement = new Card("#elements__template-item", data, openPopup);
  const cardAdd = cardElement.createCardElement()
  return cardAdd;
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