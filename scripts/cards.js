const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
]; 

const templateItem = document.querySelector('.template__item');
const cardContainer = document.querySelector('.elements__items');

const createCardElement = (cardData) => {
  const cardElement = templateItem.content.querySelector('.elements__item').cloneNode(true);

  const cardName = cardElement.querySelector('.elements__item-title');
  const cardImage = cardElement.querySelector('.elements__image');

  cardName.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  return cardElement;
}

const renderCardElement = (cardElement) => {
  cardContainer.prepend(cardElement);
}

initialCards.forEach((card) => { 
  renderCardElement(createCardElement(card));
})



