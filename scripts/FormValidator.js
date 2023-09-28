export class FormValidator {
  _formElement;
  _enableValidation;

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._enableValidation.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._enableValidation.inputErrorClass);
    errorElement.classList.remove(this._enableValidation.errorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement) {
    if(!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _disableSubmitButton() {
    this._buttonElement.classList.add(this._enableValidation.inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._enableValidation.inactiveButtonClass);
    this._buttonElement.disabled = false;
  };

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableSubmitButton();
    } else {
      this._enableSubmitButton();
    };
  };

  _setEventListeners() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  constructor(formElement, enableValidation) {
    this._formElement = formElement;
    this._enableValidation = enableValidation;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._enableValidation.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._enableValidation.submitButtonSelector);
  };

  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }
};