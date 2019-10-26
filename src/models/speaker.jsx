import PropTypes from 'prop-types'

export const Speaker = {
	search: () =>
		Promise.resolve([
			{
				id: 0,
				name: 'Jane Smith',
			},
			{
				id: 1,
				name: 'Someone else',
			},
			{
				id: 2,
				name: 'Another Person',
			},
		]),
	getTrending: () =>
		Promise.resolve([
			{
				id: 0,
				name: 'Jane Smith',
			},
			{
				id: 1,
				name: 'Someone else',
			},
			{
				id: 2,
				name: 'Another Person',
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
