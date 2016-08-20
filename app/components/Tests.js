import React from 'react';
import ReactHighcharts from "react-highcharts";
import Title from './Title';
import TestSection from './TestSection';

var data = {};
var options = {
	"Erythrocytes": ["Haemoglobin",
									 "Erythrocyte Count",
									 "PCV (Packed Cell Volume)",
								 	 "MCV (Mean Corpuscular Volume)",
								   "MCH (Mean Corpuscular Hb)"]
};

export default class Tests extends React.Component {

	render() {
    	return (
      		<div className='content'>
						<Title title="Tests" subtitle="Results from blood tests." />
						<TestSection title="Erythrocytes" options={options["Erythrocytes"]} data={data} />
      		</div>
    	);
  	}

}
