import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './css/app.scss'
import { Home } from './components/home'
import { Search } from './components/search'
import { NavBar } from './components/navbar'
import { Footer } from './components/footer'
import { Login } from './components/login/login'

function App() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search" component={Search} />
				<Route exact path="/login" component={Login} />
			</Switch>
			<Footer />
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
