import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logo/even_hand_transparent.png'

export function NavBar() {
	return (
		<nav className="navbar py-4">
			<div className="container">
				<h2 className="sr-only">EvenHand Navigation Menu</h2>

				<Link className="navbar-brand" to="/">
					<img src={Logo} width="175px" alt="Evenhand Logo" />
				</Link>

				<form className="form-inline">
					<Link className="btn btn-outline-primary" to="/login">
						I Am a Speaker
					</Link>
				</form>
			</div>
		</nav>
	)
}
