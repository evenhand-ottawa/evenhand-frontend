import React from 'react'

import { SpeakerType } from '../models/speaker'

export function SpeakerCard({ speaker }) {
	return (
		<div className="card p-5 w-100">
			<div className="card-body p-0 d-flex flex-column justify-content-center align-items-center">
				<img src={speaker.image} className="img-fluid rounded-circle" />
				<p className="lead">{speaker.name}</p>
				<p className="text-muted">{speaker.tagline}</p>
				<p>
					{speaker.speaker_topics.map(topic => (
						<span key={topic} className="badge badge-secondary mr-2">
							{topic}
						</span>
					))}
				</p>
			</div>
		</div>
	)
}

SpeakerCard.propTypes = {
	speaker: SpeakerType.isRequired,
}
