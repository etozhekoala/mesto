import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { initialCards } from '../utils/cards.js';
import { validationOptions } from '../utils/constants.js';
import { 
  editProfileButtonOpen,
  editProfilePopup,
  editProfileNameInput,
  editProfileJobInput,
  addCardButtonOpen,
  addCardPopup,
  addCardTitleInput,
  addCardLinkInput,
} from '../utils/constants.js';

const validateAddForm = new FormValidator(validationOptions, addCardPopup);
  validateAddForm.enableValidation();

const validateEditForm = new FormValidator(validationOptions, editProfilePopup);
  validateEditForm.enableValidation();

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

const popupAddCard = new PopupWithForm({popupSelector: '#popup_type_add-card', handleProfileFormSubmit: (data) => {
  const newCard = {name:data[addCardTitleInput.name], link:data[addCardLinkInput.name]};
  const cardAddElement = createCard(newCard);
  cardList.addItem(cardAddElement);
}});

const userInfo = new UserInfo({nameInputSelector: '.profile__author-name', jobInputSelector: '.profile__author-description'});

const popupEditProfile = new PopupWithForm({popupSelector: '#popup_type_edit-profile', handleProfileFormSubmit: (data) => {
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

cardList.renderItems();

fullScreenPopup.setEventListeners();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

addCardButtonOpen.addEventListener('click', () => {
  popupAddCard.open();
  validateAddForm.resetValidation();
});

editProfileButtonOpen.addEventListener('click', () => {
  popupEditProfile.open();
  getDataPopupProfile();
});