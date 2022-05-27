import './index.css'

import FormValidator from '../components/FormValidator.js'
import Card from '../components/Card.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import {
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
} from '../utils/constants.js'

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-41',
    authorization: '934e43d4-85e6-4765-9a22-cf738085b2b0'
})

let userId

api.getAll()
    .then(([cards, userData]) => {
        userInfo.setUserInfo(userData)
        userId = userData._id
        newSection.render(cards)
    })
    .catch((err) => console.log(err))

const userInfo = new UserInfo({ name: userNameSelector, description: userDescriptionSelector, avatar: userAvatarSelector })

const createCard = (data) => {
    const newCard = new Card({
        data: data,
        handleDeliteCard: () => {
            popupWithConfirm.setSubmitAction(() => {
                popupWithConfirm.renderLoading(true)
                api.delete(data._id)
                    .then(() => {
                        newCard.removeCard()
                        popupWithConfirm.close()
                    })
                    .catch((err) => console.log(err))
                    .finally(() => popupWithConfirm.renderLoading(false))
            })
            popupWithConfirm.open()
        },
        handleLikeCard: () => {
            if (!(newCard.likeButton.classList.contains('element__like-button_active'))) {
                api.like(data._id)
                    .then((data) => {
                        newCard.likeCard(data.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } else {
                api.dislike(data._id)
                    .then((data) => {
                        newCard.dislikeCard(data.likes)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        },
        handleViewCard: () => popupWithImage.open(data)
    }, templateCardSelector, api, userId)
    return newCard.createCard()
}

const newSection = new Section({
    renderer: item => {
        const card = createCard(item)
        newSection.addItem(card)
    }
}, elementsSelector
)
// Попапы
const popupWithEditAvatarForm = new PopupWithForm(popupEditAvatarSelector, inputValues => {
    popupWithEditAvatarForm.renderLoading(true)
    api.handleUserAvatar(inputValues)
        .then((data) => {
            userInfo.setUserAvatar(data)
            popupAvatarEditValidator.resetError()
            popupWithEditAvatarForm.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithEditAvatarForm.renderLoading(false))
}) //редактирование аватара
const popupWithAddImgForm = new PopupWithForm(popupAddImgSelector, inputValues => {
    popupWithAddImgForm.renderLoading(true)
    api.addCard(inputValues)
        .then((data) => {
            const card = createCard(data)
            newSection.addItem(card)
            popupImgAddValidator.resetError()
            popupWithAddImgForm.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithAddImgForm.renderLoading(false))
}) //добавление карточки
const popupWithEditProfileForm = new PopupWithForm(popupEditProfileSelector, inputValues => {
    popupWithEditProfileForm.renderLoading(true)
    api.handleUserInfo(inputValues)
        .then((data) => {
            userInfo.setUserInfo(data)
            popupProfileEditValidator.resetError()
            popupWithEditProfileForm.close()
        })
        .catch((err) => console.log(err))
        .finally(() => popupWithEditProfileForm.renderLoading(false))
}) //редактирование профиля
const popupWithConfirm = new PopupWithConfirm(popupConfirmDeliteSelector) //удаление карточки
const popupWithImage = new PopupWithImage(popupFullViewSelector) //просмотр изображения


popupWithEditAvatarForm.setEventListeners()
popupWithAddImgForm.setEventListeners()
popupWithEditProfileForm.setEventListeners()
popupWithConfirm.setEventListeners()
popupWithImage.setEventListeners()

//валидация форм
const popupProfileEditValidator = new FormValidator(config, profileEditSubmit) //форма редктирования профиля
const popupImgAddValidator = new FormValidator(config, imgAddSubmit) //форма добавления карточки
const popupAvatarEditValidator = new FormValidator(config, avatarEditSubmit) //форма редактирования аватара

popupProfileEditValidator.enableValidation()
popupImgAddValidator.enableValidation()
popupAvatarEditValidator.enableValidation()

const openProfileEdit = () => {
    const userData = userInfo.getUserInfo()
    userNameInput.value = userData.name
    userDescriptionInput.value = userData.info
    popupProfileEditValidator.resetError()
    popupWithEditProfileForm.open()
} //открытие формы редактирования профиля

imgAddBtn.addEventListener('click', () => {
    popupImgAddValidator.resetError()
    popupWithAddImgForm.open()
}) //слушатель на кнопку добавления карточки
profileEditBtn.addEventListener('click', openProfileEdit) //слушатель на кнопку редактирования профиля
avatarEditBtn.addEventListener('click', () => {
    popupAvatarEditValidator.resetError()
    popupWithEditAvatarForm.open()
}) //слушатель на кнопку редактирования аватара

