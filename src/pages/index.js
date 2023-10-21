import './index.css';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirm from '../components/PopupConfirm';
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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: 'b60af95c-ee22-4623-b633-9ce86ed2ed6a',
    'Content-Type': 'application/json'
  }}
);

let userId
let cardId


Promise.all([api.getUserProfile(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userId = userData._id;
    cardId = cardData._id;
    userInfo.setUserInfo(userData);
    cardList.renderItems(cardData);
  })

  .catch((error) => {
    console.log(`Ошибка: ${error}`)
  })

const validateAddForm = new FormValidator(validationOptions, addCardPopup);
  validateAddForm.enableValidation();

const validateEditForm = new FormValidator(validationOptions, editProfilePopup);
  validateEditForm.enableValidation();

const cardList = new Section({renderer: (data) => {
    const card = createCard(data);
    cardList.addItem(card);
  }}, ".elements__items"
);

const fullScreenPopup = new PopupWithImage('.popup_type_fullscreen');

const popupAddCard = new PopupWithForm({popupSelector: '#popup_type_add-card', handleProfileFormSubmit: (data) => {
  api.addCard({name:data[addCardTitleInput.name], link:data[addCardLinkInput.name]})
    .then((data) => {
      cardList.addItem(createCard(data));
    })
    .catch((error) => {
      console.log(error);
  })
}});

const userInfo = new UserInfo({nameInputSelector: '.profile__author-name', jobInputSelector: '.profile__author-description'});

const popupEditProfile = new PopupWithForm({popupSelector: '#popup_type_edit-profile', handleProfileFormSubmit: (data) => {
  api.editUserProfile({name: data.name, about: data.job})
    .then((response) => {
      userInfo.setUserInfo(response); 
    })  
    .catch((error) => {
      console.log(error);
  })
}});

const popupConfirm = new PopupConfirm('#popup_confirm');

function handleCardClick(cardTitle, cardImg) {
  fullScreenPopup.open(cardTitle, cardImg);
}


function getDataPopupProfile() {
  const profileData = userInfo.getUserInfo();
  editProfileNameInput.value = profileData.name;
  editProfileJobInput.value = profileData.about;
}

function createCard (data) {
  const cardElement = new Card("#elements__template-item", data, handleCardClick, {
    likes: data.likes,
    ownerId: data.owner._id,
    cardId: cardId,
    userId: userId,
    handleSetLike: (cardId) => {
      api.addLike(cardId)
      .then((data) => {
        cardElement.changeCountLikes(data)
      })
      .catch((error) => {
        console.log(error);
      });
    },

    handleDeleteLike: (cardId) => { 
    api.removeLikeCard(cardId)
        .then((data) => {
            cardElement.changeCountLikes(data)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    deleteItemCard: (cardId) => {
      popupConfirm.open();
      popupConfirm.submitAction(() => {
        api.deleteCard(cardId)
          .then(() => {
            cardElement.handleDeleteCard()
            popupConfirm.close()
          })
          .catch((error) => {
            console.log(error);
          });
      })
    }
  }   
);

  const cardAdd = cardElement.createCardElement()
  return cardAdd;
};



fullScreenPopup.setEventListeners();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

popupConfirm.setEventListeners();

addCardButtonOpen.addEventListener('click', () => {
  popupAddCard.open();
  validateAddForm.resetValidation();
});

editProfileButtonOpen.addEventListener('click', () => {
  popupEditProfile.open();
  getDataPopupProfile();
});