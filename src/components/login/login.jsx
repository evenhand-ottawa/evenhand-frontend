/** @jsx jsx */

import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { jsx, css } from '@emotion/core'

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
			<div className="container">
				<div className="row justify-content-center">
					<div className="col col-md-8 min-h-100vh d-flex align-items-center justify-content-center">
						<div className="card w-100 p-5 shadow rounded-lg">
							<div className="card-body">
								<h1
									css={css`
										font-size: 3rem;
									`}
									className="font-weight-bold mb-4 text-center"
								>
									Welcome Back.
								</h1>

								{loginState.error && (
									<div className="alert alert-danger">
										{String(loginState.error)}
									</div>
								)}

								<form
									className="px-5"
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
										<div className="col text-center">
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
									</div>
									<div className="form-group row text-center">
										<div className="col">
											<Link to="/register">New speaker? Sign up.</Link>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
