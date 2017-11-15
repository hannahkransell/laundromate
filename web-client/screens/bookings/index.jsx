import React from 'react'

class Bookings extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-2">
						<h1>
							<a>
								<span className="glyphicon glyphicon-chevron-left"></span>
							</a>
						</h1>
					</div>
					<div className="col-xs-8">
						<h1 className="text-center">v.43</h1>
					</div>
					<div className="col-xs-2">
						<h1>
							<a className="pull-right">
								<span className="glyphicon glyphicon-chevron-right"></span>
							</a>
						</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						
					</div>
				</div>
			</div>
		)
	}
}

export default Bookings