import React from 'react';
import ReactHighcharts from "react-highcharts";
import SelectBox from 'react-select-box';

import Title from './Title';
import DataMenu from "./DataMenu";

var option = React.createElement.bind(null,'option');

const config = {
	title: {
		text: "Time vs. Something",
		style: { "fontWeight": 700, "fontFamily": "Avenir Next"}
	},
	colors: ['#8085e9'],
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
		name: 'Time',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

export default class Tests extends React.Component {

	constructor() {
		super();
		this.state = {
			colors: []
		};
	}

	handleMultiChange(colors) {
    this.setState({ colors: colors })
  }

	render() {
    	return (
      		<div className='content'>
						<Title title="Tests" subtitle="Results from blood tests." />
						<div className="row">
							<SelectBox label="Favorite Color" onChange={this.handleMultiChange.bind(this)} value={this.state.colors} multiple={true}>
								<option value={'red'}>Red</option>
							</SelectBox>
						</div>
						<div className="row">
						<br/>
							<div className="col-md-12">
								<ReactHighcharts config = {config}></ReactHighcharts>
							</div>
						</div>
      		</div>
    	);
  	}
}
