import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formPopup = this._popupSelector.querySelector('.popup__form');
    this._submitButton = this._formPopup.querySelector('.popup__button-submit');
  }

  submitAction(action) {
    this._handleSubmitConfirm = action;
  }

  setEventListeners() {
    super.setEventListeners();
      this._formPopup.addEventListener('submit', (event) => {
        event.preventDefault();
        this._handleSubmitConfirm();
      })
  }
  
}