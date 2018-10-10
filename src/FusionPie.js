import React from 'react';
import ReactDOM from 'react-dom';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFusioncharts from 'react-fusioncharts';

// Resolves charts dependancy

const dataSource = {
  "chart": {
    "caption": "Market Share of Web Servers",
    "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
    "showlegend": "1",
    "showpercentvalues": "1",
    "legendposition": "bottom",
    "usedataplotcolorforlabels": "1",
    "theme": "candy",
    "palettecolors": "#5d62b5,#ffc533,#f2726f,#29c3be"
  },
  "data": [
    {
      "label": "Apache",
      "value": "32647479"
    },
    {
      "label": "Microsoft",
      "value": "22100932"
    },
    {
      "label": "Zeus",
      "value": "8000600"
    },
    {
      "label": "Other",
      "value": "18674221"
    }
  ]
};

class FusionPie extends React.Component {
   render() {
      return (
        <div className="chart">
      <ReactFusioncharts
         type = "pie2d"
         width={this.props.width}
         height={this.props.height}
         dataFormat = "JSON"
         dataSource = {dataSource} />
         </div>
      );
   }
}
export default FusionPie;
