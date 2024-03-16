import { addCard, createCard, deleteCard, likeCard } from './components/card.js'
import { initialCards } from './components/cards.js'
import { FORM_TYPES } from './components/constants.js'
import {
	closeModal,
	handleFormSubmit,
	openImage,
	openModal,
} from './components/modal.js'

import './pages/index.css'

const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.places__item')

const placesList = document.querySelector('.places__list')

const profileEditButton = document.querySelector('.profile__edit-button')
const profileEditModal = document.querySelector('.popup_type_edit')

profileEditButton.addEventListener('click', () => {
	const form = profileEditModal.querySelector('.popup__form')

	const profileName = document.querySelector('.profile__title')
	const profileDescription = document.querySelector('.profile__description')

	const name = form.querySelector('.popup__input_type_name')
	const description = form.querySelector('.popup__input_type_description')

	name.value = profileName.textContent
	description.value = profileDescription.textContent

	form.addEventListener('submit', handleFormSubmit)

	form.formType = FORM_TYPES.profileEdit

	openModal(profileEditModal)
})

profileEditModal.addEventListener('click', e => {
	closeModal(profileEditModal)
})

const profileAddButton = document.querySelector('.profile__add-button')
const newCardModal = document.querySelector('.popup_type_new-card')
const newCardForm = newCardModal.querySelector('.popup__form')

profileAddButton.addEventListener('click', () => {
	newCardForm.addEventListener('submit', handleFormSubmit)

	newCardForm.formType = FORM_TYPES.newCard

	openModal(newCardModal)
})

initialCards.forEach(card => {
	const createdCard = createCard(
		card,
		cardTemplate,
		deleteCard,
		openImage,
		likeCard
	)
	addCard(placesList, createdCard)
})
