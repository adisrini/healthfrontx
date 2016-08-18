import React from 'react';
import SideNav from './SideNav';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<SideNav />
				{this.props.children}
			</div>
		);
	}
}
