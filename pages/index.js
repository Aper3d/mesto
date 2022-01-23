const popup = document.querySelector('.popup')
const profileEditButton = document.querySelector('.profile__edit-button')
const popupCloseButton = document.querySelector('.popup__close-button')
const profileSubmitButton = document.querySelector('.popup__submit-button')
let userNameInput = document.querySelector('.input__name_type_text')
let userDescriptionInput = document.querySelector('.input__description_type_text')
let userName = document.querySelector('.profile__name')
let userDescription = document.querySelector('.profile__description')


function profileSubmit() {
    userName.textContent = userNameInput.value
    userDescription.textContent = userDescriptionInput.value
}

function profileEdit() {
    popup.classList.add('popup__open')
    userNameInput.placeholder = userName.textContent
    userDescriptionInput.placeholder = userDescription.textContent

}
function popupClose() {
    popup.classList.remove('popup__open')
}

profileEditButton.addEventListener('click', profileEdit)
popupCloseButton.addEventListener('click', popupClose)
profileSubmitButton.addEventListener('click', profileSubmit)