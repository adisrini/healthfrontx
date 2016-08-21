import React from 'react';
import ReactHighcharts from "react-highcharts";

export default class LineChart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			config: {
				title: {
					text: ""
				},
				colors: ['#8085e9', '#FF9800', '#9CCC65', '#29B6F6', '#E91E63', '#FFEB3B', '#26A69A', '#FF5722', '#388E3C', '#0277BD', '#F06292', '#7B1FA2', '#FFD54F', '#8D6E63'],
				xAxis: {
					categories: []
				},
				series: []
			},
			series: []
		};
		for(var i = 0; i < this.props.data.length; i++) {
		    var report = this.props.data[i];
				var date = new Date(report.time_collected);
				this.state.config.xAxis.categories.push(date.toDateString());
		}
		for(var i = 0; i < this.props.data.length; i++) {
				var report = this.props.data[i];
				for(var group in report.investigation) {
						if(String(group) === this.props.title) {
								for(var feature in report.investigation[String(group)][0]) {
										var contains = false;
										var entry = {};
										for(var j = 0; j < this.state.series.length; j++) {
												var ser = this.state.series[j];
												if(ser.name === String(feature)) {
														contains = true;
														entry = ser;
												}
										}
										if(contains) {
												entry.data.push(report.investigation[String(group)][0][String(feature)].value);
										} else {
												entry = {
													name: String(feature),
													data: [report.investigation[String(group)][0][String(feature)].value]
												}
												this.state.series.push(entry);
										}
								}
						}
				}
		}
	}

  render() {
		for(var i = 0; i < this.state.series.length; i++) {
			var entry = this.state.series[i];
			var index = -1;
			for(var j = 0; j < this.state.config.series.length; j++) {
				var configEntry = this.state.config.series[j];
				if(configEntry.name === String(entry.name)) {
					index = j;
				}
			}
			if(this.props.features.indexOf(String(entry.name)) == -1) {	// if not found in features, remove it from config if its there
				if(index != -1) {
					this.state.config.series.splice(index, 1);
				}
			} else {
				if(index == -1) {																				 // if it is in features and not in config, add it to config
				this.state.config.series.push(entry);
				}
			}
		}
    return (
      <div className="row">
        <br/>
        <div className="col-md-11">
          <ReactHighcharts config={this.state.config}></ReactHighcharts>
        </div>
      </div>
    )
  }

}
