import React from 'react'

import { SpeakerType } from '../models/speaker'

export function SpeakerCard({ speaker }) {
	return (
		<div className="card p-5">
			<div className="card-body">
				<p>{speaker.name}</p>
			</div>
		</div>
	)
}

SpeakerCard.propTypes = {
	speaker: SpeakerType.isRequired,
}
