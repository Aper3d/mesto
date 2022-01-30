const popup = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-button')
const popupCloseButton = document.querySelector('.popup__close-button')
const form = document.querySelector('.popup__forms')
let userNameInput = document.querySelector('.popup__input_type_name')
let userDescriptionInput = document.querySelector('.popup__input_type_description')
let userName = document.querySelector('.profile__name')
let userDescription = document.querySelector('.profile__description')

function closePopup() {
    popup.classList.remove('popup_open')
}

function editProfile(event) {
    event.preventDefault()
    popup.classList.add('popup_open')
    userNameInput.value = userName.textContent
    userDescriptionInput.value = userDescription.textContent
}

function submitProfile(event) {
    event.preventDefault()
    userName.textContent = userNameInput.value
    userDescription.textContent = userDescriptionInput.value
    closePopup()
}

profileEditButton.addEventListener('click', editProfile)
popupCloseButton.addEventListener('click', closePopup)
form.addEventListener('submit', submitProfile)