import PropTypes from 'prop-types'

const topics = [
	'Machine Learning',
	'Diversity Inclusion',
	'JavaScript',
	'Politics',
	'Pokemon',
]

function randomTopics() {
	return [...new Array(3 + Math.round(Math.random() * 2))].map(() => {
		return topics[Math.floor(topics.length * Math.random())]
	})
}

export const Speaker = {
	search: () =>
		Promise.resolve([
			{
				id: '0',
				name: 'Jane Smith',
			},
			{
				id: '1',
				name: 'Someone else',
			},
			{
				id: '2',
				name: 'Another Person',
			},
		]),
	getTrending: () =>
		Promise.resolve([
			{
				id: '0',
				name: 'Jane Smith',
				image: `https://randomuser.me/api/portraits/women/${Math.round(
					Math.random() * 80,
				)}.jpg`,
				speaker_topics: randomTopics(),
				tagline: 'Tagline',
			},
			{
				id: '1',
				name: 'Someone else',
				image: `https://randomuser.me/api/portraits/women/${Math.round(
					Math.random() * 80,
				)}.jpg`,
				speaker_topics: randomTopics(),
				tagline: 'Tagline',
			},
			{
				id: '2',
				name: 'Another Person',
				image: `https://randomuser.me/api/portraits/women/${Math.round(
					Math.random() * 80,
				)}.jpg`,
				speaker_topics: randomTopics(),
				tagline: 'Tagline',
			},
		]),
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
