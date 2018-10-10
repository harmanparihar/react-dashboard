import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
    type: 'pie2d',
    width: 500,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        // Chart configuration
        "chart": {
            "caption": "Countries With Most Oil Reserves [2017-18]",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Country",
            "yAxisName": "Reserves (MMbbl)",
            "numberSuffix": "K",
            "theme": "fusion"
        },
        // Chart data
        "data": [{
            "label": "Venezuela",
            "value": "290"
        }, {
            "label": "Saudi",
            "value": "260"
        }, {
            "label": "Canada",
            "value": "180"
        }, {
            "label": "Iran",
            "value": "140"
        }, {
            "label": "Russia",
            "value": "115"
        }, {
            "label": "UAE",
            "value": "100"
        }, {
            "label": "US",
            "value": "30"
        }, {
            "label": "China",
            "value": "30"
        }]
    },
};

class Multiple extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {},
      currentVal: 'column2d'
    };

    this.renderComplete = this.renderComplete.bind(this);
    this.radioHandler = this.radioHandler.bind(this);
  }

  renderComplete(chart) {
    this.setState({ chart });
  }

  // Handler for radio buttons to change chart type.
  radioHandler(e) {
    this.state.chart.chartType(e.currentTarget.value);
    this.setState({
      currentVal: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <br />
        <center>
          <span>Choose a chart type:</span>
          <div className="change-type">
            <div>
              <input
                type="radio"
                value="column2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'column2d'} />
              <label>Column 2D Chart</label>
            </div>
            <div>
              <input
                type="radio"
                value="bar2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'bar2d'} />
              <label>Bar 2D Chart</label>
            </div>
            <div>
              <input
                type="radio"
                value="pie2d"
                onChange={this.radioHandler}
                checked={this.state.currentVal === 'pie2d'} />
              <label>Pie 2D Chart</label>
            </div>
          </div>
        </center>
      </div>
    );
  }
}
export default Multiple;
