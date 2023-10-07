export const editProfileButtonOpen = document.querySelector('.profile__edit-button');
export const editProfilePopup = document.querySelector('.popup_type_edit-profile');

export const editProfileNameInput = editProfilePopup.querySelector('.popup__form-input_type_name');
export const editProfileJobInput = editProfilePopup.querySelector('.popup__form-input_type_job');

export const addCardButtonOpen = document.querySelector('.profile__add-button');
export const addCardPopup = document.querySelector('.popup_type_add-card');

export const addCardEditForm = addCardPopup.querySelector('.popup__form_type_add-card');
export const addCardTitleInput = addCardEditForm.querySelector('.popup__form-input_type_title');
export const addCardLinkInput = addCardEditForm.querySelector('.popup__form-input_type_link');

export const validationOptions = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button-submit_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__error_visible'
};