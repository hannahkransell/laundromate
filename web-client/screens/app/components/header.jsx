import React from 'react'

class Header extends React.Component {
	render() {
		return (
			<div className="row beige">
				<div className="col-xs-4">
					<img className="img-responsive" src="https://media.giphy.com/media/l2QZUkF4YilI5fO6I/giphy.gif" />
				</div>
				<div className="col-xs-8">
					<h1 className="text3d">Laundromate 5</h1>
				</div>
			</div>
		)
	}
}

export default Header