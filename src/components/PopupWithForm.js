import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleProfileFormSubmit}) {
    super(popupSelector);
      this._handleProfileFormSubmit = handleProfileFormSubmit;
      this._formPopup = this._popupSelector.querySelector('.popup__form');
      this._inputListPopup = this._formPopup.querySelectorAll('.popup__form-input');
  };

  _getInputValues() {
    this._formValues = {};
    this._inputListPopup.forEach((item) => {
      this._formValues[item.name] = item.value;
    });
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._formPopup.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleProfileFormSubmit(this._getInputValues());
      this.close();
    });
  };

  close() {
    super.close();
    this._formPopup.reset();
  };
};