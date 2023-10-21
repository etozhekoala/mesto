export default class Card {
  
  constructor(templateSelector, data, handleCardClick, {ownerId, userId, handleSetLike, handleDeleteLike}) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    
    this._likes = data.likes;
    this._ownerId = ownerId;
    this._userId = userId;
    this._cardId = data._id

    this._handleSetLike =  handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
  };
  
  _getTemplate() {
    const cardTemplate =  document
      .querySelector(this._templateSelector)
      .content.querySelector('.elements__item')
      .cloneNode(true);

    return cardTemplate;
  };

  _handleDelete() {
    this._cardElement.remove();
  };

  _setEventListeners() {

    this._cardElement.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });

    this.likeButton.addEventListener('click', () => {
      if (this.likeButton.classList.contains('elements__like-button_active')) {
        this._handleDeleteLike(this._cardId)
      } else {
        this._handleSetLike(this._cardId)
      }
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data.name, this._data.link);
    });
  };

  _changeStateLike() {
    this._data.likes.forEach((user) => {
      if (user._id === this._userId) {
        this.likeButton.classList.add('elements__like-button_active')
      }
    })
  }

  handleSetLike(data) {
    this._likes = data.likes;
    this.likeButton.classList.toggle('elements__like-button_active')
  }

  changeCountLikes(data) {
    this._likes = data.likes;
    this.likeCount.textContent = this._likes.length;
    this.likeButton.classList.toggle('elements__like-button_active');
  }
 
  createCardElement() {
    this._cardElement = this._getTemplate();
    this._cardName = this._cardElement.querySelector('.elements__item-title');
    this._cardImage = this._cardElement.querySelector('.elements__image');
    this.likeButton = this._cardElement.querySelector('.elements__like-button');
    this.likeCount = this._cardElement.querySelector('.elements__like-number');
    this.likeCount.textContent = this._likes.length;

    this._setEventListeners();
    this._changeStateLike()

    this._cardName.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;

    return this._cardElement;
    
  };
};