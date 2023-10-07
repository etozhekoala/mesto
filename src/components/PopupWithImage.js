import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
      this._imagePopup = this._popup.querySelector('.popup__image-fullscreen');
      this._titlePopup = this._popup.querySelector('.popup__fullscreen-title');
  };

  open(cardTitle, cardImg) {
    this._imagePopup.src = cardImg;
    this._imagePopup.alt = cardTitle;
    this._titlePopup.textContent = cardTitle;
    super.open()
  }
  
};