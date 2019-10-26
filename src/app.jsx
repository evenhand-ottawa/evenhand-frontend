import 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './components/home'
import { Search } from './components/search'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/search" component={Search} />
			</Switch>
		</Router>
	)
}

ReactDOM.render(<App />, document.getElementById('app'))
