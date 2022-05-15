import './index.css'

import FormValidator from '../components/FormValidator.js'
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

const userInfo = new UserInfo({userNameSelector: userName, userInfoSelector: userDescription})

const createCard = item => {
    const newCard = new Card({
        data: item,
        handleCardClick: () => popupWithImage.open(item)
        }, templateCard)
    return newCard.createCard()
}

const newSection = new Section({ 
    items: cards, 
    renderer: item => {
        const card = createCard(item)
        newSection.addItem(card)
    }}, 
    elements
)
newSection.render()

const popupWithAddForm = new PopupWithForm(popupAddImg, inputValues => {
    const card = createCard(inputValues)
    newSection.addItem(card)
    popupWithAddForm.close()
})
popupWithAddForm.setEventListeners()

const popupWithEditForm = new PopupWithForm(popupEditProfile, inputValues => {
    userInfo.setUserInfo(inputValues)
    popupWithEditForm.close()
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
    popupWithAddForm.open()
})
profileEditBtn.addEventListener('click', () => {
    const userData = userInfo.getUserInfo()
    userNameInput.value = userData.name
    userDescriptionInput.value = userData.info
    popupEditValidator.resetError()
    popupWithEditForm.open()
})