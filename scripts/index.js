import FormValidator from './Validate.js'
import Card from './Card.js'

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

function renderNewCard(data) {
    const newCard = new Card({ link: data.link, name: data.name }, templateCard, openView)
    const cardElement = newCard.createCard()
    elements.prepend(cardElement)
}

function addNewCard(event) {
    event.preventDefault();
    renderNewCard({ link: placeLink.value, name: placeName.value })
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



function editProfile(event) {
    event.preventDefault()
    popupEditValidator.resetError(popupEditProfile)
    userNameInput.value = userName.textContent
    userDescriptionInput.value = userDescription.textContent
    openPopup(popupEditProfile)
}

function addCard(event) {
    event.preventDefault()
    popupAddValidator.resetError(popupAddImg)
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
    if (evt.target.classList.contains('popup__overlay') || evt.target.classList.contains('popup__close-button')) {
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

cards.forEach((item) => {
    renderNewCard({ link: item.link, name: item.name })
})