import React from 'react';
import ReactFusioncharts from 'react-fusioncharts';

const dataSource = {
  "chart": {
    "caption": "Yearly Energy Production Rate",
    "subcaption": " Top 5 Developed Countries",
    "numbersuffix": " TWh",
    "showsum": "1",
    "plottooltext": "$label produces <b>$dataValue</b> of energy from $seriesName",
    "drawcrossline": "1",
    "theme": "candy",
    "palettecolors": "#5d62b5,#ffc533,#f2726f,#29c3be,#62b58f"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Canada"
        },
        {
          "label": "China"
        },
        {
          "label": "Russia"
        },
        {
          "label": "Australia"
        },
        {
          "label": "United States"
        },
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "Coal",
      "data": [
        {
          "value": "400"
        },
        {
          "value": "830"
        },
        {
          "value": "500"
        },
        {
          "value": "420"
        },
        {
          "value": "790"
        },
      ]
    },
    {
      "seriesname": "Hydro",
      "data": [
        {
          "value": "350"
        },
        {
          "value": "620"
        },
        {
          "value": "410"
        },
        {
          "value": "370"
        },
        {
          "value": "720"
        },

      ]
    },
    {
      "seriesname": "Nuclear",
      "data": [
        {
          "value": "210"
        },
        {
          "value": "400"
        },
        {
          "value": "450"
        },
        {
          "value": "180"
        },
        {
          "value": "570"
        },
      ]
    },
    {
      "seriesname": "Gas",
      "data": [
        {
          "value": "180"
        },
        {
          "value": "330"
        },
        {
          "value": "230"
        },
        {
          "value": "160"
        },
        {
          "value": "440"
        },
      ]
    },
    {
      "seriesname": "Oil",
      "data": [
        {
          "value": "60"
        },
        {
          "value": "200"
        },
        {
          "value": "200"
        },
        {
          "value": "50"
        },
        {
          "value": "230"
        },
      ]
    }
  ]
};

class FusionStack extends React.Component {
   render() {
      return (
        <div className="chart">
      <ReactFusioncharts
         type = "stackedcolumn2d"
         width={this.props.width}
         height={this.props.height}
         dataFormat = "JSON"
         dataSource = {dataSource} />
         </div>
      );
   }
}
export default FusionStack;
