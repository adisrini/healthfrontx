import React from 'react';
import SelectBox from 'react-select-box';
import DataMenu from "./DataMenu";
import LineChart from './LineChart';

var option = React.createElement.bind(null,'option');

export default class TestSection extends React.Component {

  constructor(props) {
		super(props);
		this.state = {
			features: []
		};
	}

  handleMultiChange(features) {
    this.setState({ features: features })
  }

  render() {
    return (
      <div className="test-section">
        <div className="row">
          <div className="col-md-10">
            <h3>{this.props.title}</h3>
            <SelectBox label="Feature" onChange={this.handleMultiChange.bind(this)} value={this.state.features} multiple={true}>
              {this.props.options.map(function(object, i){
                return <option value={object}>{object}</option>;
              })}
            </SelectBox>
          </div>
        </div>
        <LineChart />
      </div>
    )
  }

}
