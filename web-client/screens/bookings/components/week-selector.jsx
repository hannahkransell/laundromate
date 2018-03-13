import React from 'react'
import {getWeek} from 'laundromate/util'

class WeekSelector extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-2">
					<h1>
						<a>
							<span onClick={this.props.onChange.bind(this,-7)} className="glyphicon glyphicon-chevron-left"></span>
						</a>
					</h1>
				</div>
				<div className="col-xs-8">
					<h1 className="text-center">v.{getWeek(this.props.firstDateOfWeek)}</h1>
				</div>
				<div className="col-xs-2">
					<h1>
						<a className="pull-right">
							<span onClick={this.props.onChange.bind(this,7)} className="glyphicon glyphicon-chevron-right"></span>
						</a>
					</h1>
				</div>
			</div>
		)
	}
}

export default WeekSelector