import PropTypes from 'prop-types'

import User1 from '../images/users/1.png'
import User2 from '../images/users/2.png'
import User3 from '../images/users/3.png'
import User4 from '../images/users/4.png'
import User5 from '../images/users/5.png'

const images = [User1, User2, User3, User4, User5]

function pickRandom(list) {
	return list[Math.floor(Math.random() * list.length)]
}

function makeUser() {
	return {
		id: String(Math.random()),
		name: pickRandom(['Person A', 'Person B', 'Person C']),
		image: pickRandom(images),
		speaker_topics: makeItems(3, 5, () =>
			pickRandom([
				'Machine Learning',
				'Diversity Inclusion',
				'JavaScript',
				'Politics',
				'Pokemon',
			]),
		),
		tagline:
			'Zainab Muse is an award-winning entrepreneur, process designer, interactive digital media expert, author and filmmaker. She is the founder & CEO of Wingd Inc. and Creatorland.',
	}
}

function makeItems(min, max, map) {
	return [...new Array(min + Math.round(Math.random() * (max - min)))].map(map)
}

export const Speaker = {
	search: () => Promise.resolve(makeItems(15, 20, () => makeUser())),
	getTrending: () => Promise.resolve(makeItems(3, 5, () => makeUser())),
}

export const SpeakerType = PropTypes.shape({
	id: PropTypes.string.isRequired,
	first_name: PropTypes.string.isRequired,
	last_name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	pronouns: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	will_travel: PropTypes.bool.isRequired,
	occupation: PropTypes.string.isRequired,
	tagline: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	video: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	twitter: PropTypes.string.isRequired,
	instagram: PropTypes.string.isRequired,
	linkedin: PropTypes.string.isRequired,
	biography: PropTypes.string.isRequired,
	speaker_topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	speaker_languages: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
})
