export default class Card {
    constructor({ data, handleDeliteCard, handleLikeCard, handleViewCard }, templateCard, api, userId) {
        this._link = data.link
        this._name = data.name
        this._likes = data.likes
        this._id = data._id
        this._ownerId = data.owner._id
      
        this._api = api
        this._userId = userId

        this._handleDeliteCard = handleDeliteCard
        this._handleViewCard = handleViewCard
        this._handleLikeCard = handleLikeCard

        this._templateCard = templateCard

        this.likeButton = null
        this._likeCounter = null
        this._element = null
        this._deliteButton = null

    }

    _getTemplate() {
        const cardElement = document.querySelector(this._templateCard).content.cloneNode(true)
        return cardElement
    }

    createCard() {
        this._card = this._getTemplate()

        this._image = this._card.querySelector('.element__photo')
        this.likeButton = this._card.querySelector('.element__like-button')
        this._likeCounter = this._card.querySelector('.element__like-counter')
        this._deliteButton = this._card.querySelector('.element__delete-button')
        this._element = this._card.querySelector('.element')

        this._image.src = this._link
        this._image.alt = this._name
        this._card.querySelector('.element__description').textContent = this._name
        this._likeCounter.textContent = this._likes.length

        if (!(this._ownerId === this._userId)) {
            this._deliteButton.style.display = 'none'
        }
        if (this._likes.find((obj) => this._userId === obj._id)) {
            this.likeButton.classList.add('element__like-button_active')
        }

        this._setEventListeners()
        return this._card
    }

    _setEventListeners() {
        this._deliteButton.addEventListener('click', () => {this._handleDeliteCard()})
        this._image.addEventListener('click', () => {this._handleViewCard()})
        this.likeButton.addEventListener('click', () => {this._handleLikeCard()})
    }

    likeCard(data) {
        this.likeButton.classList.add('element__like-button_active')
        this._likeCounter.textContent = data.length
    }

    dislikeCard(data) {
        this.likeButton.classList.remove('element__like-button_active')
        this._likeCounter.textContent = data.length
    }

    removeCard() {
        this._element.remove()
        this._element = null
      }
}
