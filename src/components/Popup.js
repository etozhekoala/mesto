export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  };

  _handleEscClose(event) {
    if(event.key === 'Escape') {
      this.close();
    };
  };

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  };

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  };

  setEventListeners() {
    this._popupSelector.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup_opened') || event.target.classList.contains('popup__button-close')) {
        this.close();
      };
    });
  };
};