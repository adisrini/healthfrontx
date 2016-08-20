import React from 'react';
import ReactHighcharts from "react-highcharts";

const config = {
	colors: ['#8085e9'],
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
		name: 'Time',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

export default class LineChart extends React.Component {

  render() {
    return (
      <div className="row">
        <br/>
        <div className="col-md-11">
          <ReactHighcharts config = {config}></ReactHighcharts>
        </div>
      </div>
    )
  }

}
