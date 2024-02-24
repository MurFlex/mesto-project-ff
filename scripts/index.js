const createCard = ({ link = '', name = '' }, deleteHandler) => {
	const card = cardTemplate.cloneNode(true)

	image = card.querySelector('.card__image')

	image.src = link
	image.alt = name
	card.querySelector('.card__title').textContent = name

	card
		.querySelector('.card__delete-button')
		.addEventListener('click', deleteHandler)

	return card
}

const addCard = (list, card) => {
	list.append(card)
}

const deleteCard = e => {
	const eventTarget = e.target.closest('.places__item')

	if (!eventTarget) return

	eventTarget.remove()
}

const cardTemplate = document
	.querySelector('#card-template')
	.content.querySelector('.places__item')

const placesList = document.querySelector('.places__list')

initialCards.forEach(card => {
	const createdCard = createCard(card, deleteCard)
	addCard(placesList, createdCard)
})
