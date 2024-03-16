import { addCard, createCard, deleteCard, likeCard } from './components/card.js'
import { initialCards } from './components/cards.js'
import { closeModal, openModal } from './components/modal.js'

import './pages/index.css'

const cardActions = {
	deleteCard,
	openImage,
	likeCard,
}

const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.places__item')
const placesList = document.querySelector('.places__list')

const profileEditButton = document.querySelector('.profile__edit-button')
const profileEditModal = document.querySelector('.popup_type_edit')
const profileForm = profileEditModal.querySelector('.popup__form')
const profileName = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
profileForm.addEventListener('submit', e => handleEditFormSubmit(e))

const name = profileForm.querySelector('.popup__input_type_name')
const description = profileForm.querySelector('.popup__input_type_description')

const profileAddButton = document.querySelector('.profile__add-button')
const newCardModal = document.querySelector('.popup_type_new-card')
const newCardForm = newCardModal.querySelector('.popup__form')
export const imageModal = document.querySelector('.popup_type_image')
const image = imageModal.querySelector('.popup__image')
const caption = imageModal.querySelector('.popup__caption')

const popups = document.querySelectorAll('.popup')

popups.forEach(popup => {
	const modalContent = popup.querySelector('.popup__content')

	modalContent.addEventListener('click', e => {
		e.stopPropagation()
	})

	popup.addEventListener('mousedown', evt => {
		if (evt.target.classList.contains('popup_is-opened')) {
			closeModal(popup)
		}

		if (evt.target.classList.contains('popup__close')) {
			closeModal(popup)
		}
	})
})

profileEditButton.addEventListener('click', () => {
	name.value = profileName.textContent
	description.value = profileDescription.textContent

	openModal(profileEditModal)
})

function handleEditFormSubmit(e) {
	e.preventDefault()

	changeProfileData({
		name: name.value,
		description: description.value,
	})

	closeModal(profileEditModal)
}

const changeProfileData = ({ name, description }) => {
	profileName.textContent = name
	profileDescription.textContent = description
}

newCardForm.addEventListener('submit', handleAddCardSubmit)

profileAddButton.addEventListener('click', () => {
	openModal(newCardModal)
})

function handleAddCardSubmit(e) {
	e.preventDefault()

	const card = {
		name: e.target.querySelector('.popup__input_type_card-name').value,
		link: e.target.querySelector('.popup__input_type_url').value,
	}

	const createdCard = createCard(card, cardTemplate, cardActions)

	addCard(placesList, createdCard)

	newCardForm.reset()

	closeModal(newCardModal)
}

function openImage({ name, link }) {
	image.src = link
	image.alt = name
	caption.textContent = name

	openModal(imageModal)
}

initialCards.forEach(card => {
	const createdCard = createCard(card, cardTemplate, cardActions)
	addCard(placesList, createdCard)
})
