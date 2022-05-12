export default class Card {
    constructor({ data, handleCardClick }, templateCard) {
        this._link = data.link
        this._name = data.name
        this._handleCardClick = handleCardClick
        this._templateCard = templateCard
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateCard).content.cloneNode(true)
        return cardElement;
    }

    createCard() {
        this._card = this._getTemplate()
        this._image = this._card.querySelector('.element__photo')
        this._image.src = this._link
        this._image.alt = this._name
        this._card.querySelector('.element__description').textContent = this._name
        this._setEventListeners()
        return this._card
    }

    _setEventListeners() {
        this._card.querySelector('.element__delete-button').addEventListener('click', this._deleteCard)
        this._image.addEventListener('click', this._handleCardClick)
        this._card.querySelector('.element__like-button').addEventListener('click', this._likeImg)
    }

    _deleteCard(event) {
        event.target.closest('.element').remove();
    }

    _likeImg(event) {
        event.target.closest('.element__like-button').classList.toggle('element__like-button_active');
    }
}
