import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formPopup = this._popupSelector.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
      this._formPopup.addEventListener('submit', (event) => {
        event.preventDefault();
        
          this.close();
      })
  }
  
}