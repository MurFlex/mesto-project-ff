const addCard = ({ link = '', name = '' }) => {
	const card = cardTemplate.cloneNode(true)

	image = card.querySelector('.card__image')

	image.src = link
	image.alt = name
	card.querySelector('.card__description').textContent = name

	card
		.querySelector('.card__delete-button')
		.addEventListener('click', deleteCard)

	placesList.append(card)
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

if (cardTemplate && placesList) {
	initialCards.forEach(card => addCard(card))
}
