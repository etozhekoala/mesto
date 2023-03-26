const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');

const nameInput = popup.querySelector('.popup_type_name');
const jobInput = popup.querySelector('.popup_type_job')

const btnOpen = document.querySelector('.profile__edit-button');
const btnClose = popup.querySelector('.popup__button-close');

const authorName = document.querySelector('.profile__author-name');
const authorJob = document.querySelector('.profile__author-description');


function handleFormSubmit (event) {
  
  event.preventDefault();
  
  authorName.textContent = nameInput.value;
  authorJob.textContent = jobInput.value;
  
  popup.classList.remove('popup_opened');
  
}

function openForm() {
  popup.classList.add('popup_opened');
  
  nameInput.value = authorName.textContent;
  jobInput.value = authorJob.textContent;
  
}

function closeForm() {

  popup.classList.remove('popup_opened');

}

btnOpen.addEventListener('click', openForm);
btnClose.addEventListener('click', closeForm);
popupForm.addEventListener('submit', handleFormSubmit);
