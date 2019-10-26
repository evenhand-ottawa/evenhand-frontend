import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Speaker } from '../models/speaker'
import { SpeakerCard } from './speaker-card'
import { useAsync } from '../state'

export function Home() {
	const [query, setQuery] = useState('')
	const speakersList = useAsync(Speaker.getTrending)

	return (
		<>
			<div className="bg-secondary p-5">
				<div className="container">
					<div className="row p-5">
						<div className="col text-center">
							<h1 className="text-white mb-n3">EvenHand</h1>
							<h3 className="text-white font-weight-normal mb-5">
								We enable event organizers to create inclusive speaker events.
							</h3>

							<div className="d-flex">
								<input
									type="text"
									className="form-control col mr-3"
									placeholder="Machine learning"
									value={query}
									onChange={evt => setQuery(evt.target.value)}
								/>

								<Link
									to={`/search?q=${encodeURIComponent(query)}`}
									className="btn btn-primary col-auto"
								>
									<i className="fas fa-search mr-2" />
									Search
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white p-5">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							<h2>About us</h2>
							<p className="lead">We do things!</p>
						</div>
					</div>
				</div>
			</div>

			<div className="p-5">
				<div className="container">
					<div className="row">
						<div className="col text-center">
							<h2 className="mb-5">Speakers</h2>
							<div className="row">
								{speakersList.status === 'inprogress' && (
									<div className="spinner-border text-primary" role="status">
										<span className="sr-only">Loading...</span>
									</div>
								)}
								{speakersList.status === 'success' &&
									speakersList.result.map(speaker => (
										<div className="col" key={speaker.id}>
											<SpeakerCard speaker={speaker} />
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
