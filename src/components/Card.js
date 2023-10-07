export default class Card {
  
  constructor(templateSelector, data, handleCardClick) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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

  _handleLike() {
    this._likeButton.classList.toggle('elements__like-button_active');
  };

  _setEventListeners() {
    this._cardElement.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });

    this._likeButton = this._cardElement.querySelector('.elements__like-button')
    this._likeButton.addEventListener('click', () => {
      this._handleLike();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._data.name, this._data.link);
    });
  };

  createCardElement() {
    this._cardElement = this._getTemplate();
    this._cardName = this._cardElement.querySelector('.elements__item-title');
    this._cardImage = this._cardElement.querySelector('.elements__image');
    this._setEventListeners()

    this._cardName.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;

    return this._cardElement;
  };
};