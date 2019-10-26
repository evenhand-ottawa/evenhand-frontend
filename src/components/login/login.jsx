/** @jsx jsx */

import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { jsx, css } from '@emotion/core'

import imgLeftCurve from './left-curve.svg'
import imgRightCurve from './right-curve.svg'
import { User } from '../../models/user'
import { useAsyncAction } from '../../state'

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loginState, loginActions] = useAsyncAction(User.login)

	if (loginState.status === 'success') {
		return <Redirect to="/search" />
	}

	return (
		<React.Fragment>
			<div className="absolute-top w-100 h-100 send-to-back">
				<div
					className="h-100 w-50 d-inline-block"
					css={css`
						background-image: url(${imgLeftCurve});
						background-size: 100% auto;
						background-repeat: no-repeat;
						background-position: left bottom;
					`}
				></div>
				<div
					className="h-100 w-50 d-inline-block"
					css={css`
						background-image: url(${imgRightCurve});
						background-size: 100% auto;
						background-repeat: no-repeat;
						background-position: right top;
					`}
				></div>
			</div>

			<div className="container py-5 h-100">
				<div className="row">
					<div className="col-6">
						<h1
							css={css`
								font-size: 3rem;
							`}
							className="font-weight-bold mb-4"
						>
							Welcome Back.
						</h1>

						{loginState.error && (
							<div className="alert alert-danger">
								{String(loginState.error)}
							</div>
						)}

						<form
							onSubmit={evt => {
								evt.preventDefault()
								loginActions.fetch({
									email,
									password,
								})
							}}
						>
							<div className="form-group">
								<label>Email</label>
								<input
									type="email"
									className={
										'form-control' + (email ? '' : ' form-control-empty')
									}
									value={email}
									onChange={evt => setEmail(evt.target.value)}
									disabled={loginState.status === 'inprogress'}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="password"
									className={
										'form-control' + (password ? '' : ' form-control-empty')
									}
									value={password}
									onChange={evt => setPassword(evt.target.value)}
									disabled={loginState.status === 'inprogress'}
								/>
							</div>
							<div className="form-group row">
								<div className="col-auto">
									<button
										type="submit"
										className="btn btn-primary"
										disabled={loginState.status === 'inprogress'}
									>
										{loginState.status === 'inprogress' && (
											<span
												className="spinner-border spinner-border-sm"
												role="status"
												aria-hidden="true"
											/>
										)}
										Log In
									</button>
								</div>
								<div className="col d-flex align-items-center">
									<Link to="/register">New to the site? Sign up.</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
