const popup = document.querySelector('.popup');
const popupForm = popup.querySelector('.popup__form');

const nameInput = popup.querySelector('.popup__name-input');
const jobInput = popup.querySelector('.popup__job-input')

const btnOpen = document.querySelector('.profile__edit-button');
const btnClose = popup.querySelector('.popup__button-close');

const authorName = document.querySelector('.profile__author-name');
const authorJob = document.querySelector('.profile__author-description');

btnOpen.addEventListener('click', () => {
  
  popup.classList.add('popup__opened');

  nameInput.value = authorName.textContent;
  jobInput.value = authorJob.textContent;
});

btnClose.addEventListener('click', () => {
  
  popup.classList.remove('popup__opened');

});

function handleFormSubmit (event) {

  event.preventDefault();
  
  authorName.textContent = nameInput.value;
  authorJob.textContent = jobInput.value;
  
  popup.classList.remove('popup__opened');

}

popupForm.addEventListener('submit', handleFormSubmit);