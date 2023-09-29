export  default class FormValidator {

  _option;
  _formElement;
  
  constructor(option, formElement) {
    this._option = option;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._option.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._option.submitButtonSelector);
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._option.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._option.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._option.inputErrorClass);
    errorElement.classList.remove(this._option.errorClass);
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
    this._buttonElement.classList.add(this._option.inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._option.inactiveButtonClass);
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

  resetValidation() {
    this._disableSubmitButton();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  enableValidation() {
    this._setEventListeners();
  };
};