const popupAddImg = '#add' //попап добавления карточки  
const popupEditProfile = '#edit' //попап редактирования профиля
const popupFullView = '#view' //попап просмотра изображения

const imgAddBtn = document.querySelector('.profile__add-button') //кнопка добавления карточки
const profileEditBtn = document.querySelector('.profile__edit-button') //кнопка редактирования профиля

const profileEditSubmit = '#edit-form' //форма редактирования профиля
const imgAddSubmit = '#add-form' //форма добавления карточки

const elements = '.elements__grid' //контейнер с карточками
const templateCard = '#element' //селектор темплейта карточек

const userNameInput = document.querySelector('#user-name') //инпут имени профиля 
const userDescriptionInput = document.querySelector('#user-description') //инпут описания профиля

const userName = '.profile__name' //имя профиля
const userDescription = '.profile__description' //описания профиля

//const popupImg = '.popup__image' //попап просмотра карточки изображение
//const popupCaption = '.popup__caption' //попап просмотра карточки описание

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
    userNameInput,
    userDescriptionInput,
    userName,
    userDescription,
    config,
    cards
};