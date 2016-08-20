import React from 'react';

export default class Title extends React.Component {

	render() {
    	return (
				<div className="row">
					<div className="col-lg-10">
						<h1>{this.props.title}</h1>
						<h4>{this.props.subtitle}</h4>
						<hr/>
					</div>
				</div>
    	);
  	}

}
