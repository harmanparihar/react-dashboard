
// Step 1 - Including react
import React from 'react';

// Step 2 - Including the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Including the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Including the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

// Step 6 - Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: 'column2d',// The chart type
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
            "caption": "Countries With Highest Air Pollution [2017-18]",
            "subCaption": "In PPM = Micrograms per cubic meter",
            "xAxisName": "Country",
            "yAxisName": "Median (PPM)",
            "numberSuffix": "K",
            "theme": "candy",
            "bgColor": "#262a33",
            "palettecolors":"5d62b5,29c3be,f2726f",
            "containerBackgroundOpacity": "0",
        },
        // Chart Data
        "data": [{
            "label": "Saudi Arabia",
            "value": "108"
        }, {
            "label": "Qatar",
            "value": "103"
        }, {
            "label": "Egypt",
            "value": "93"
        }, {
            "label": "Bangladesh",
            "value": "84"
        }, {
            "label": "Kuwait",
            "value": "75"
        }, {
            "label": "Cameroon",
            "value": "65"
        }, {
            "label": "Nepal",
            "value": "64"
        }, {
            "label": "UAE",
            "value": "64"
        }]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class FusionBar extends React.Component {
  render() {
     return (
       <div className="chart">
         <ReactFC
            {...chartConfigs} width={this.props.width} height={this.props.height}/>
        </div>
     );
  }
}

export default FusionBar;
