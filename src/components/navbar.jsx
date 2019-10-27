import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo/even_hand_transparent.png'

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-md py-4 absolute-top w-100">
			<div className="container">
				<h2 className="sr-only">EvenHand Navigation Menu</h2>

				<Link className="navbar-brand" to="/">
					<img src={Logo} width="175px" alt="Evenhand Logo" />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="navbar-collapse collapse" id="navbarCollapse">
					<form className="form-inline ml-auto">
						<Link className="btn btn-primary" to="/login">
							I Am a Speaker
						</Link>
					</form>
				</div>
			</div>
		</nav>
	)
}
