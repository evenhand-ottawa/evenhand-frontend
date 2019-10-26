import React from 'react'

import Logo from '../images/logo/even_hand_transparent.png'

export function NavBar() {
	return (
		<nav className="navbar py-4">
			<div className="container">
				<h2 className="sr-only">EvenHand Navigation Menu</h2>

				<a className="navbar-brand" href="#">
					<img src={Logo} width="175px" alt="Evenhand Logo" />
				</a>

				<form className="form-inline">
					<button className="btn btn-outline-primary" type="button">
						I Am a Speaker
					</button>
				</form>
			</div>
		</nav>
	)
}
