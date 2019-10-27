import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import { Speaker } from '../models/speaker'
import { useAsyncAction, useQueryParam } from '../state'
import { SpeakerCard } from './speaker-card'

export function Search() {
	const params = useParams()
	const [query, setQuery] = useQueryParam('q', params.query || '')

	const [searchState, searchActions] = useAsyncAction(
		() =>
			Speaker.search({
				query,
			}),
		[query],
	)

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col">
						<form
							className="p-5"
							onSubmit={evt => {
								evt.preventDefault()
								searchActions.fetch()
							}}
						>
							<label className="font-weight-bold">
								Search by topic or industry
							</label>
							<div className="input-group shadow-sm">
								<input
									type="text"
									className="form-control"
									placeholder="i.e. climate change"
									value={query}
									onChange={evt => setQuery(evt.target.value)}
								/>
								<div className="input-group-append">
									<button type="submit" className="btn btn-primary">
										<i className="fas fa-search" />
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				{searchState.status === 'error' && (
					<div className="alert alert-danger">{String(searchState.error)}</div>
				)}

				{searchState.status === 'inprogress' && (
					<div className="text-center">
						<span
							className="spinner-border spinner-border-sm"
							role="status"
							aria-hidden="true"
						/>
					</div>
				)}

				{searchState.result && (
					<div className="row">
						{searchState.result.map(speaker => (
							<div className="col-4 mb-4" key={speaker.id}>
								<SpeakerCard speaker={speaker} />
							</div>
						))}
					</div>
				)}
			</div>
		</React.Fragment>
	)
}
