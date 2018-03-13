import React from 'react'
import WeekSelector from './components/week-selector'
import {getWeek, getDateOfWeek, addDays} from 'laundromate/util'
import Table from './components/table'


class Bookings extends React.Component {

	constructor(props) {
		super(props)
		this.onWeekChange = this.onWeekChange.bind(this)
		const now = new Date()
		this.state = {firstDateOfWeek: getDateOfWeek(getWeek(now), now.getFullYear())}
	}

	onWeekChange(delta) {
		const newDate = addDays(this.state.firstDateOfWeek, delta)
		console.log('week changed!', newDate)
		this.setState({firstDateOfWeek: newDate})
	}

	render() {
		return (
			<div>
				<WeekSelector firstDateOfWeek={this.state.firstDateOfWeek} onChange={this.onWeekChange} />
				<Table firstDateOfWeek={this.state.firstDateOfWeek} />
			</div>
		)
	}
}

export default Bookings