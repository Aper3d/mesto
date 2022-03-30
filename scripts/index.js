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
];

const popupAddImg = document.querySelector('#add');
const popupEditProfile = document.querySelector('#edit');
const popupFullView = document.querySelector('#view');

const imgAddBtn = document.querySelector('.profile__add-button');
const profileEditBtn = document.querySelector('.profile__edit-button');

const profileEditSubmit = popupEditProfile.querySelector('#edit-form');
const imgAddSubmit = popupAddImg.querySelector('#add-form');

const elements = document.querySelector('.elements__grid');
const templateCard = document.querySelector('#element').content;

const placeName = popupAddImg.querySelector('#place-name');
const placeLink = popupAddImg.querySelector('#place-link');

const userNameInput = popupEditProfile.querySelector('#user-name');
const userDescriptionInput = popupEditProfile.querySelector('#user-description');

const userName = document.querySelector('.profile__name');
const userDescription = document.querySelector('.profile__description');
const popupImg = popupFullView.querySelector('.popup__image');
const popupCaption = popupFullView.querySelector('.popup__caption');

function createCard({ link, name }) {
    const newCard = templateCard.cloneNode(true);
    newCard.querySelector('.element__photo').src = link;
    newCard.querySelector('.element__photo').alt = name;
    newCard.querySelector('.element__description').textContent = name;
    newCard.querySelector('.element__delete-button').addEventListener('click', deleteCard);
    newCard.querySelector('.element__photo').addEventListener('click', openView);
    newCard.querySelector('.element__like-button').addEventListener('click', likeImg);
    return newCard;
}

function renderCards() {
    cards.forEach(renderCard);
}
function renderCard(cards) {
    const newCard = createCard({ link: cards.link, name: cards.name });
    elements.prepend(newCard);
}

function addNewCard(event) {
    event.preventDefault();
    const newCard = createCard({ link: placeLink.value, name: placeName.value });
    elements.prepend(newCard);
    closePopup(popupAddImg);
}

function openPopup(popup) {
    popup.classList.add('popup_open');
    popup.addEventListener('mousedown', mousedownClosePopup);
    document.addEventListener('keydown', keydownClosePopup);
}

function closePopup(popup) {
    popup.classList.remove('popup_open');
    popup.removeEventListener('mousedown', mousedownClosePopup);
    popup.removeEventListener('keydown', keydownClosePopup);
}

function resetError(popup) {
    popup.querySelector('.popup__forms').reset();
    const spanError = Array.from(popup.querySelectorAll('.popup__error'));
    spanError.forEach((span) => {
        span.classList.remove('popup__error_visible');
        span.textContent = " ";
    });
    popup.querySelector('.popup__submit-button').setAttribute("disabled", "disabled");
    popup.querySelector('.popup__submit-button').classList.add('popup__submit-button_inactiv');
}

function editProfile(event) {
    event.preventDefault();
    resetError(popupEditProfile);
    userNameInput.value = userName.textContent;
    userDescriptionInput.value = userDescription.textContent;
    openPopup(popupEditProfile);
}

function addCard(event) {
    event.preventDefault();
    resetError(popupAddImg);
    openPopup(popupAddImg);
}

function submitProfile(event) {
    event.preventDefault();
    userName.textContent = userNameInput.value;
    userDescription.textContent = userDescriptionInput.value;
    closePopup(popupEditProfile);
}

function deleteCard(event) {
    event.target.closest('.element').remove();
}

function openView(event) {
    popupImg.src = event.target.closest('.element__photo').src;
    popupImg.alt = event.target.closest('.element__photo').alt;
    popupCaption.textContent = event.target.closest('.element__photo').alt;
    openPopup(popupFullView);
}

function likeImg(event) {
    event.target.closest('.element__like-button').classList.toggle('element__like-button_active');
}

function mousedownClosePopup(evt) {
    const openedPopup = document.querySelector('.popup_open');
    if (evt.target.classList.contains('popup__overlay')) {
        closePopup(openedPopup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
        closePopup(openedPopup);
    }
}

function keydownClosePopup(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_open');
        closePopup(openedPopup);
    }
}

profileEditBtn.addEventListener('click', editProfile);
imgAddBtn.addEventListener('click', addCard);

profileEditSubmit.addEventListener('submit', submitProfile);
imgAddSubmit.addEventListener('submit', addNewCard);

renderCards();