import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
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

// const handleAddCardFormSubmit = (event) => {
//   event.preventDefault();
//   const name = addCardTitleInput.value;
//   const link = addCardLinkInput.value;

//   const newCardData = {
//     name, link,
//   };
  
//   cardContainer.prepend(createCard(newCardData));
//   closePopup(addCardPopup);
//   addCardEditForm.reset();
// };

const cardList = new Section({items: initialCards, renderer: (data) => {
    const card = createCard(data);
    cardList.addItem(card);
  }}, ".elements__items"
);

const fullScreenPopup = new PopupWithImage('.popup_type_fullscreen');

function createCard (data) {
  const cardElement = new Card("#elements__template-item", data, handleCardClick);
  const cardAdd = cardElement.createCardElement()
  return cardAdd;
};

const popupAddCard = new PopupWithForm({popup: '#popup_type_add-card', handleProfileFormSubmit: (data) => {
  const newCard = {name:data[addCardTitleInput.name], link:data[addCardLinkInput.name]};
  const cardAddElement = createCard(newCard);
  cardList.addItem(cardAddElement);
}});

const userInfo = new UserInfo({editProfileNameInput: '.profile__author-name', editProfileJobInput: '.profile__author-description'});

const popupEditProfile = new PopupWithForm({popup: '#popup_type_edit-profile', handleProfileFormSubmit: (data) => {
    userInfo.setUserInfo(data.name, data.job);
}});


function handleCardClick(cardTitle, cardImg) {
  fullScreenPopup.open(cardTitle, cardImg);
}

function getDataPopupProfile() {
  const profileData = userInfo.getUserInfo();
  editProfileNameInput.value = profileData.name;
  editProfileJobInput.value = profileData.job;
}

// function handleAddCardFormSubmit(data) {
//   const card = createCard(data);
//     cardList.addItem(card);
// }

// function openProfileEditForm() {
//   openPopup(editProfilePopup);
//   editProfileNameInput.value = editProfileAuthorName.textContent;
//   editProfileJobInput.value = editProfileAuthorJob.textContent;
// };

// function handleProfileFormSubmit (event) {

//   event.preventDefault();

//   editProfileAuthorName.textContent = editProfileNameInput.value;
//   editProfileAuthorJob.textContent = editProfileJobInput.value;

//   closePopup(editProfilePopup);
// };

cardList.renderItems();

fullScreenPopup.setEventListeners();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

// editProfileButtonOpen.addEventListener('click', () => {
//   openProfileEditForm(editProfilePopup);
//   validateEditForm.resetValidation();
// });

// editProfileButtonOpen.addEventListener('click', () => {
//   openProfileEditForm(editProfilePopup);
//   validateEditForm.resetValidation();
// });

// editProfileButtonClose.addEventListener('click', () => {
//   closePopup(editProfilePopup);
// });

// editProfilePopup.addEventListener('click', (event) => {
//   if (event.target === editProfilePopup) {
//     closePopup(editProfilePopup);
//   }
// });

// editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardButtonOpen.addEventListener('click', () => {
  popupAddCard.open();
  validateAddForm.resetValidation();
});

editProfileButtonOpen.addEventListener('click', () => {
  popupEditProfile.open();
  getDataPopupProfile();
});

// addCardButtonClose.addEventListener('click', () => {
//   closePopup(addCardPopup);
// });

// addCardPopup.addEventListener('click', (event) => {
//   if (event.target === addCardPopup) {
//     closePopup(addCardPopup);
//   }
// });

// addCardEditForm.addEventListener('submit', handleAddCardFormSubmit);