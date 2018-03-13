import React from 'react'
import {getDateString, addDays} from 'laundromate/util'

class Table extends React.Component {
	
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<table className="table table-responsive table-bordered">
						<thead>
							<tr>
								<th>Måndag<br />{getDateString(this.props.firstDateOfWeek)}</th>
								<th>Tisdag<br />{getDateString(addDays(this.props.firstDateOfWeek, 1))}</th> 
								<th>Onsdag<br />{getDateString(addDays(this.props.firstDateOfWeek, 2))}</th>
								<th>Torsdag<br />{getDateString(addDays(this.props.firstDateOfWeek, 3))}</th>
								<th>Fredag<br />{getDateString(addDays(this.props.firstDateOfWeek, 4))}</th>
								<th>Lördag<br />{getDateString(addDays(this.props.firstDateOfWeek, 5))}</th>
								<th>Söndag<br />{getDateString(addDays(this.props.firstDateOfWeek, 6))}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
								<td className="success">07:00-10:00<br /><span>BOKA</span></td>
							</tr>
							<tr>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
								<td className="success">10:00-13:00<br /><span>BOKA</span></td>
							</tr>
							<tr>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
								<td className="success">13:00-16:00<br /><span>BOKA</span></td>
							</tr>
							<tr>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
								<td className="success">16:00-19:00<br /><span>BOKA</span></td>
							</tr>
							<tr>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
								<td className="success">19:00-22:00<br /><span>BOKA</span></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Table