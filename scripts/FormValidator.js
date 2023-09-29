export  default class FormValidator {

  _validationOptions;
  _formElement;
  
  constructor(validationOptions, formElement) {
    this._validationOptions = validationOptions;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._validationOptions.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._validationOptions.submitButtonSelector);
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._validationOptions.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._validationOptions.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._validationOptions.inputErrorClass);
    errorElement.classList.remove(this._validationOptions.errorClass);
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
    this._buttonElement.classList.add(this._validationOptions.inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _enableSubmitButton() {
    this._buttonElement.classList.remove(this._validationOptions.inactiveButtonClass);
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