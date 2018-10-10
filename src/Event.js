//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

//Including react-fusioncharts component
import ReactFC from 'react-fusioncharts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'column2d',
    width: '500',
    height: '400',
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

var defaultMessage = 'Click on the plot to see the value along with the label';

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
          message: '',
          enabled: false
        }

        this.trackPlotClick = this.trackPlotClick.bind(this);
        this.resetChart = this.resetChart.bind(this);
        this.dataPlotClick = this.dataPlotClick.bind(this);
    }

    // Handler for 'Track Data Plot Clicks' button.
    // 1. Adds an eventlistener for data plot cick on the chart
    // 2. Sets the default message when data plot click tracking is enabled
    trackPlotClick() {
        FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);
        this.setState({
            message: defaultMessage,
            enabled: true
        });
      }

    // Event listener for dataplotclick event on chart. Update message with data plot values.
    dataPlotClick(eventObj, dataObj) {
        this.setState({
            message: [
                'You have clicked on plot ',
                <strong>{dataObj.categoryLabel}</strong>,
                ' whose value is ',
                <strong>{dataObj.displayValue}</strong>
            ]
        });
    }

    // Handler for 'Reset' button.
    // Resets the chart to default message and removed the event listener.
    resetChart() {
    FusionCharts.removeEventListener('dataplotClick', this.dataPlotClick);
        this.setState({
            message: '',
            enabled: false
        });
      }

      render () {
        return (
          <div>
            <ReactFC {...chartConfigs} />
            <div style={{ padding: '5px' }} id="message">
              { this.state.message || 'Click the below buttons to add an event dynamically to a charts' }
            </div>
            <button
              className='btn btn-outline-secondary btn-sm'
              disabled={this.state.enabled}
              onClick={this.trackPlotClick}
            >
              Add/ listen to data plot click event
            </button>
            <button
              className='btn btn-outline-secondary btn-sm'
              disabled={!this.state.enabled}
              onClick={this.resetChart}
            >
              Remove data plot click event
            </button>
          </div>
        )
      }
}
export default Event;
