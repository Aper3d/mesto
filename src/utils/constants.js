const popupAddImgSelector = '#add' //селектор попапа добавления карточки  
const popupEditProfileSelector = '#edit' //селектор попапа редактирования профиля
const popupFullViewSelector = '#view' //селектор попапа просмотра изображения
const popupEditAvatarSelector = '#avatar' //селектор попапа редактирования аватара
const popupConfirmDeliteSelector = '#confirm' //селектор попапа удаления карточки

const imgAddBtn = document.querySelector('.profile__add-button') //кнопка добавления карточки
const profileEditBtn = document.querySelector('.profile__edit-button') //кнопка редактирования профиля
const avatarEditBtn = document.querySelector('.profile__avatar-button') //кнопка редктирования аватара

const profileEditSubmit = document.querySelector('#edit-form') //форма редактирования профиля
const imgAddSubmit = document.querySelector('#add-form') //форма добавления карточки
const avatarEditSubmit = document.querySelector('#avatar-form') //форма редактирования аватара

const elementsSelector = '.elements__grid' //селектор контейнер с карточками
const templateCardSelector = '#element' //селектор темплейта карточек

const userNameInput = document.querySelector('#user-name') //инпут имени профиля 
const userDescriptionInput = document.querySelector('#user-description') //инпут описания профиля

const userNameSelector = '.profile__name' //селектор имени профиля
const userDescriptionSelector = '.profile__description' //селектор описания профиля
const userAvatarSelector = '.profile__avatar' //селектор аватара профиля

const config = {
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__submit-button_inactiv",
    inputErrorClass: ".popup__error",
    errorClass: "popup__error_visible"
} //селекторы для валидации

export {
    popupAddImgSelector,
    popupEditProfileSelector,
    popupFullViewSelector,
    popupEditAvatarSelector,
    popupConfirmDeliteSelector,
    imgAddBtn,
    profileEditBtn,
    avatarEditBtn,
    profileEditSubmit,
    imgAddSubmit,
    avatarEditSubmit,
    elementsSelector,
    templateCardSelector,
    userNameInput,
    userDescriptionInput,
    userNameSelector,
    userDescriptionSelector,
    userAvatarSelector,
    config
};