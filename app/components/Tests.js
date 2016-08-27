import React from 'react';
import Title from './Title';
import TestSection from './TestSection';
import data from '../../public/data/blood-tests.json';


var groups = {};

for(var i = 0; i < data.length; i++) {
    var report = data[i];
		for(var group in report.investigation) {
  			if (report.investigation.hasOwnProperty(group)) {
						groups[String(group)] = [];
						groups[String(group)].push(String(group));
						for(var feature in report.investigation[group][0]) {
								groups[String(group)].push(feature);
						}
				}
		}
}

function mapObject(object, callback) {
	return Object.keys(object).map(function (key) {
		return callback(key, object[key]);
	});
}

export default class Tests extends React.Component {

	render() {
    	return (
      		<div className='content'>
						<Title title="Tests" subtitle="Results from blood tests." />
						{mapObject(groups, function (key, value) {
							return <TestSection title={value[0]} options={value.slice(1)} data={data}/>;
						})}
      		</div>
    	);
  	}

}
