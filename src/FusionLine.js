
// Step 1 - Including react
import React from 'react';
import ReactDOM from 'react-dom';

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
    type: 'msline',// The chart type
    dataFormat: 'json', // Data type
    dataSource: {
        // Chart Configuration
        "chart": {
    "caption": "Reach of Social Media Platforms amoung youth",
    "yaxisname": "% of youth on this platform",
    "subcaption": "2012-2016",
    "showhovereffect": "1",
    "numbersuffix": "%",
    "drawcrossline": "1",
    "plottooltext": "<b>$dataValue</b> of youth were on $seriesName",
    "theme": "candy",
    "palettecolors":"5d62b5,29c3be,f2726f"
  },
  "categories": [
    {
      "category": [
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        },
        {
          "label": "2016"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Facebook",
      "data": [
        {
          "value": "62"
        },
        {
          "value": "64"
        },
        {
          "value": "64"
        },
        {
          "value": "66"
        },
        {
          "value": "78"
        }
      ]
    },
    {
      "seriesname": "Instagram",
      "data": [
        {
          "value": "16"
        },
        {
          "value": "28"
        },
        {
          "value": "34"
        },
        {
          "value": "42"
        },
        {
          "value": "54"
        }
      ]
    },
    {
      "seriesname": "LinkedIn",
      "data": [
        {
          "value": "20"
        },
        {
          "value": "22"
        },
        {
          "value": "27"
        },
        {
          "value": "22"
        },
        {
          "value": "29"
        }
      ]
    },
    {
      "seriesname": "Twitter",
      "data": [
        {
          "value": "18"
        },
        {
          "value": "19"
        },
        {
          "value": "21"
        },
        {
          "value": "21"
        },
        {
          "value": "24"
        }
      ]
    }
  ]
    }
};

// Step 8 - Creating the DOM element to pass the react-fusioncharts component
class FusionLine extends React.Component {
  render() {
     return (
       <div className="chart">
         <ReactFC
            {...chartConfigs} width={this.props.width} height={this.props.height}/>
        </div>
     );
  }
}

export default FusionLine;
