import FormValidator from './validate.js'
import Card from './card.js'

import {
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
} from './const.js'

const popupEditValidator = new FormValidator(config, profileEditSubmit)
popupEditValidator.enableValidation()

const popupAddValidator = new FormValidator(config, imgAddSubmit)
popupAddValidator.enableValidation()

function renderCards() {
    cards.forEach((item) => {
        const newCard = new Card({ link: item.link, name: item.name }, templateCard, openView)
        const cardElement = newCard.createCard()
        elements.prepend(cardElement)
    })
}

function addNewCard(event) {
    event.preventDefault();
    const newCard = new Card({ link: placeLink.value, name: placeName.value }, templateCard, openView)
    const cardElement = newCard.createCard()
    elements.prepend(cardElement)
    closePopup(popupAddImg)
}

function openPopup(popup) {
    popup.classList.add('popup_open')
    popup.addEventListener('mousedown', mousedownClosePopup)
    document.addEventListener('keydown', keydownClosePopup)
}

function closePopup(popup) {
    popup.classList.remove('popup_open')
    popup.removeEventListener('mousedown', mousedownClosePopup)
    document.removeEventListener('keydown', keydownClosePopup)
}

function resetError(popup) {
    popup.querySelector(config.formSelector).reset()
    const spanError = Array.from(popup.querySelectorAll(config.inputErrorClass))
    spanError.forEach((span) => {
        span.classList.remove(config.errorClass)
        span.textContent = " "
    });
    popup.querySelector(config.submitButtonSelector).setAttribute("disabled", "disabled")
    popup.querySelector(config.submitButtonSelector).classList.add(config.inactiveButtonClass)
}

function editProfile(event) {
    event.preventDefault()
    resetError(popupEditProfile)
    userNameInput.value = userName.textContent
    userDescriptionInput.value = userDescription.textContent
    openPopup(popupEditProfile)
}

function addCard(event) {
    event.preventDefault()
    resetError(popupAddImg)
    openPopup(popupAddImg)
}

function submitProfile(event) {
    event.preventDefault()
    userName.textContent = userNameInput.value
    userDescription.textContent = userDescriptionInput.value
    closePopup(popupEditProfile)
}

function openView(event) {
    popupImg.src = event.target.closest('.element__photo').src
    popupImg.alt = event.target.closest('.element__photo').alt
    popupCaption.textContent = event.target.closest('.element__photo').alt
    openPopup(popupFullView)
}



function mousedownClosePopup(evt) {
    const openedPopup = document.querySelector('.popup_open')
    if (evt.target.classList.contains('popup__overlay')) {
        closePopup(openedPopup)
    }
    if (evt.target.classList.contains('popup__close-button')) {
        closePopup(openedPopup)
    }
}

function keydownClosePopup(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open')
        closePopup(openedPopup)
    }
}

profileEditBtn.addEventListener('click', editProfile)
imgAddBtn.addEventListener('click', addCard)

profileEditSubmit.addEventListener('submit', submitProfile)
imgAddSubmit.addEventListener('submit', addNewCard)

renderCards()