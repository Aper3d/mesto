const cards = [
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
    }
];

const editPopup = document.querySelector('#edit');
const addPopup = document.querySelector('#add');
const viewPopup = document.querySelector('#view');

const addButton = document.querySelector('.profile__add-button');
const editButton = document.querySelector('.profile__edit-button');

const closeAddButton = document.querySelector('#add-close');
const closeEditButton = document.querySelector('#edit-close');
const closeViewButton = document.querySelector('#view-close');

const editFormButton = document.querySelector('#edit-form');
const addFormButton = document.querySelector('#add-form');

const elements = document.querySelector('.elements__grid');
const templateCard = document.querySelector('#element').content;

let placeName = document.querySelector('.popup__input_type_place');
let placeLink = document.querySelector('.popup__input_type_link');
let userNameInput = document.querySelector('.popup__input_type_name');
let userDescriptionInput = document.querySelector('.popup__input_type_description');
let userName = document.querySelector('.profile__name');
let userDescription = document.querySelector('.profile__description');
let popupImg = document.querySelector('.popup__image');
let popupCaption = document.querySelector('.popup__caption');

function render() {
    cards.forEach(renderCards);
}

function renderCards(cards) {
    const newCard = templateCard.cloneNode(true);
    newCard.querySelector('.element__photo').src = cards.link;
    newCard.querySelector('.element__photo').alt = cards.name;
    newCard.querySelector('.element__description').textContent = cards.name;
    newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    newCard.querySelector('.element__photo').addEventListener('click', openView);
    elements.prepend(newCard);
}

function newCard(event) {
    event.preventDefault();
    const newCard = templateCard.cloneNode(true);
    newCard.querySelector('.element__photo').src = placeLink.value;
    newCard.querySelector('.element__photo').alt = placeName.value;
    newCard.querySelector('.element__description').textContent = placeName.value;
    newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    newCard.querySelector('.element__photo').addEventListener('click', openView);
    elements.prepend(newCard);
    popupClose(addPopup);
}

function popupOpen(popup) {
    popup.classList.add('popup_open');
}

function popupClose(popup) {
    popup.classList.remove('popup_open');
}

function editProfile(event) {
    event.preventDefault();
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    popupOpen(editPopup);
}

function addCard(event) {
    event.preventDefault();
    popupOpen(addPopup);
}

function submitProfile(event) {
    event.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    popupClose(editPopup);
}

function deleteCard(event) {
    event.target.closest('.element').remove();
}

function openView(event) {
    popupImg.src = event.target.closest('.element__photo').src;
    popupImg.alt = event.target.closest('.element__photo').alt;
    popupCaption.textContent = event.target.closest('.element__photo').alt;
    popupOpen(viewPopup);
}

editButton.addEventListener('click', editProfile);
addButton.addEventListener('click', addCard);

closeAddButton.addEventListener('click', () => popupClose(addPopup));
closeEditButton.addEventListener('click', () => popupClose(editPopup));
closeViewButton.addEventListener('click', () => popupClose(viewPopup));

editFormButton.addEventListener('submit', submitProfile);
addFormButton.addEventListener('submit', newCard);

render();