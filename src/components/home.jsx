/** @jsx jsx */

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'

import imgPerson from '../images/person-home-2x.png'

const BigNumber = styled.h1`
	font-size: 10rem;
	color: rgba(47, 102, 92, 0.74);
	line-height: 1;
	margin-top: 2rem;
`

export function Home() {
	const [query, setQuery] = useState('')

	return (
		<React.Fragment>
			<div className="bg-white bg-curve send-to-back w-100 absolute-top">
				<div className="container">
					<div className="row">
						<div className="col-6 offset-6 text-right">
							<img
								src={imgPerson}
								css={css`
									max-height: 100vh;
								`}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="container py-5 mt-5">
				<div className="row py-5">
					<div className="col-6">
						<p
							css={css`
								line-height: 1.2;
								font-size: 3rem;
							`}
						>
							Creating meaningful conversations across Canada.
						</p>
					</div>
				</div>

				<div className="row pb-5 mb-5">
					<div className="overflow-hidden p-4 rounded-lg">
						<p className="lead font-weight-bold pl-4">Find your speaker.</p>
						<div
							className="input-group shadow-sm overflow-hidden"
							css={css`
								border-radius: 2rem;
							`}
						>
							<input
								css={css`
									border-top-left-radius: 2rem !important;
									border-bottom-left-radius: 2rem !important;
								`}
								type="text"
								className="form-control border"
								placeholder="Search a topic"
								value={query}
								onChange={evt => setQuery(evt.target.value)}
							/>
							<div className="input-group-append">
								<Link
									to={`/search?q=${encodeURIComponent(query)}`}
									className="btn btn-primary"
									css={css`
										padding-left: 1.75rem;
									`}
								>
									<i className="fas fa-search" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white">
				<div className="mt-n5 mb-5">
					<div className="container bg-white shadow px-5 py-5">
						<div className="row">
							<div className="col">
								<h2 className="text-center mb-5">How it works</h2>
							</div>
						</div>

						<div className="row py-4">
							<div className="col-auto">
								<BigNumber>01</BigNumber>
							</div>
							<div className="col d-flex align-items-center">
								<h4 className="col d-flex align-items-center">Do things</h4>
							</div>
						</div>

						<div className="row py-4">
							<div className="col-auto offset-1">
								<BigNumber>02</BigNumber>
							</div>
							<div className="col d-flex align-items-center">
								<h4 className="col d-flex align-items-center">Do things</h4>
							</div>
						</div>

						<div className="row py-4">
							<div className="col-auto">
								<BigNumber>03</BigNumber>
							</div>
							<div className="col d-flex align-items-center">
								<h4 className="col d-flex align-items-center">Do things</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
