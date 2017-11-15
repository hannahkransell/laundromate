import React from 'react'
import './styles'
import Bookings from 'laundromate/screens/bookings'
import Header from './components/header'

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Header />
				<Bookings />
			</div>
		)
	}
}

export default App