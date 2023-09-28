import { openPopup } from '../utils/utils.js';

export default class Card {
  _templateSelector;
  _data;
  _openFullscreen;
  
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
    this._cardElement.querySelector('.elements__like-button').classList.toggle('elements__like-button_active');
  };

  _handleFullscreen() {
    this._fullscreenImage.src = this._link;
    this._fullscreenImage.alt = this._name;
    this._fullscreenTitle.textContent = this._name;
    openPopup(this._openFullscreen);
  };

  constructor(templateSelector, data, openFullscreen) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openFullscreen = openFullscreen;
  };

  createCardElement() {
    this._cardElement = this._getTemplate();
    this._cardName = this._cardElement.querySelector('.elements__item-title');
    this._cardImage = this._cardElement.querySelector('.elements__image');

    this._cardName.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = this._data.name;
    
    this._cardElement.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._handleDelete();
    });

    this._cardElement.querySelector('.elements__like-button').addEventListener('click', () => {
      this._handleLike();
    });

    this._openFullscreen = document.querySelector('.popup_type_fullscreen');
    this._fullscreenImage = this._openFullscreen.querySelector('.popup__image-fullscreen');
    this._fullscreenTitle = this._openFullscreen.querySelector('.popup__fullscreen-title');
    this._cardImage.addEventListener('click', () => {
      this._handleFullscreen();
    });
    
    return this._cardElement;
  };
};