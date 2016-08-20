import React from 'react';
import Title from './Title';

export default class Sleep extends React.Component {

	render() {
    	return (
      		<div className='content'>
						<Title title="Sleep" subtitle="Zzzzzz..." />
						<div className="row">
							<div className="col-md-6">
								<h1>Hello</h1>
							</div>
							<div className="col-md-6">
								<h1>World</h1>
							</div>
						</div>
      		</div>
    	);
  	}
}
