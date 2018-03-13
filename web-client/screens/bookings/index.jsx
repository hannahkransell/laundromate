import React from 'react'
import WeekSelector from './components/week-selector'

class Bookings extends React.Component {

	constructor(props) {
		super(props)
		this.onWeekChange = this.onWeekChange.bind(this)
		this.state = {weekNumber: 40}
	}

	onWeekChange(delta) {
		this.setState({weekNumber: this.state.weekNumber+delta})
	}

	render() {
		return (
			<div>
				<WeekSelector number={this.state.weekNumber} onChange={this.onWeekChange} />
				<div className="row">
					<div className="col-xs-12">
						
					</div>
				</div>
			</div>
		)
	}
}

export default Bookings