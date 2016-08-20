import React from 'react';
import Title from './Title';

export default class Activity extends React.Component {

	render() {
    	return (
      		<div className='content'>
						<Title title="Activity" subtitle="Steps, calories, distance, and more." />
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
