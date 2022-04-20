const popupAddImg = document.querySelector('#add') //попап добавления карточки  
const popupEditProfile = document.querySelector('#edit') //попап редактирования профиля
const popupFullView = document.querySelector('#view') //попап просмотра изображения

const imgAddBtn = document.querySelector('.profile__add-button') //кнопка добавления карточки
const profileEditBtn = document.querySelector('.profile__edit-button') //кнопка редактирования профиля

const profileEditSubmit = popupEditProfile.querySelector('#edit-form') //форма редактирования профиля
const imgAddSubmit = popupAddImg.querySelector('#add-form') //форма добавления карточки

const elements = document.querySelector('.elements__grid') //контейнер с карточками
const templateCard = '#element' //селектор темплейта карточек

const placeName = popupAddImg.querySelector('#place-name') //инпут названия карточки
const placeLink = popupAddImg.querySelector('#place-link') //инпут ссылки карточки

const userNameInput = popupEditProfile.querySelector('#user-name') //инпут имени профиля 
const userDescriptionInput = popupEditProfile.querySelector('#user-description') //инпут описания профиля

const userName = document.querySelector('.profile__name') //имя профиля
const userDescription = document.querySelector('.profile__description') //описания профиля
const popupImg = popupFullView.querySelector('.popup__image') //попап просмотра карточки изображение
const popupCaption = popupFullView.querySelector('.popup__caption') //попап просмотра карточки описание

const config = {
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactiv",
    inputErrorClass: ".popup__error",
    errorClass: "popup__error_visible"
} //селекторы для валидации

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
] //карточки для рендеринга

export {
    popupAddImg,
    popupEditProfile,
    popupFullView,
    imgAddBtn,
    profileEditBtn,
    profileEditSubmit,
    imgAddSubmit,
    elements,
    templateCard,
    placeName,
    placeLink,
    userNameInput,
    userDescriptionInput,
    userName,
    userDescription,
    popupImg,
    popupCaption,
    config,
    cards
};