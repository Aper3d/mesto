import './index.css'

import FormValidator from '../components/Validate.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

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
    userNameInput,
    userDescriptionInput,
    userName,
    userDescription,
    config,
    cards
} from '../utils/constants.js'

const userInfo = new UserInfo({name: userName, info: userDescription})

const createCard = item => {
    const newCard = new Card({
        data: item,
        handleCardClick: () => popupWithImage.openPopup(item)
        }, templateCard)
    return newCard
}

const newSection = new Section({ 
    items: cards, 
    renderer: item => {
        const card = createCard(item)
        const newCard = card.createCard()
        newSection.addItem(newCard)
    }}, 
    elements
)
newSection.render()

const popupWithAddForm = new PopupWithForm(popupAddImg, inputValues => {
    const card = createCard(inputValues)
    const newCard = card.createCard()
    newSection.addItem(newCard)
    popupWithAddForm.closePopup()
})
popupWithAddForm.setEventListeners()

const popupWithEditForm = new PopupWithForm(popupEditProfile, inputValues => {
    userInfo.setUserInfo(inputValues)
    popupWithEditForm.closePopup()
})
popupWithEditForm.setEventListeners()

const popupWithImage = new PopupWithImage(popupFullView)
popupWithImage.setEventListeners()

const popupEditValidator = new FormValidator(config, profileEditSubmit)
popupEditValidator.enableValidation()

const popupAddValidator = new FormValidator(config, imgAddSubmit)
popupAddValidator.enableValidation()

imgAddBtn.addEventListener('click', () => {
    popupAddValidator.resetError()
    popupWithAddForm.openPopup()
})
profileEditBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo()
    userNameInput.value = userData.name
    userDescriptionInput.value = userData.info
    popupEditValidator.resetError()
    popupWithEditForm.openPopup()
})