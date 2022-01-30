const popup = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-button')
const popupCloseButton = document.querySelector('.popup__close-button')
const form = document.querySelector('.popup__forms')
let userNameInput = document.querySelector('.popup__input_type_name')
let userDescriptionInput = document.querySelector('.popup__input_type_description')
let userName = document.querySelector('.profile__name')
let userDescription = document.querySelector('.profile__description')

function popupClose() {
    popup.classList.remove('popup_open')
}

function profileEdit(event) {
    event.preventDefault()
    popup.classList.add('popup_open')
    userNameInput.value = userName.textContent
    userDescriptionInput.value = userDescription.textContent
}

function profileSubmit(event) {
    event.preventDefault()
    userName.textContent = userNameInput.value
    userDescription.textContent = userDescriptionInput.value
    popupClose()
}

profileEditButton.addEventListener('click', profileEdit)
popupCloseButton.addEventListener('click', popupClose)
form.addEventListener('submit', profileSubmit)