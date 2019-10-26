import React from 'react'

export function NavBar() {
	return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container">

                <h2 className="sr-only">EvenHand Navigation Menu</h2>

                <a className="navbar-brand" href="#">EvenHand</a>

                <form className="form-inline my-2 my-lg-0">
                    <button type="button" class="btn btn-primary">Log in</button>
                </form>

            </div>
        </nav>

    )
}
