//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
import PowerCharts from 'fusioncharts/fusioncharts.powercharts';

//Including react-fusioncharts component
import ReactFC from 'react-fusioncharts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, PowerCharts, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
    type: 'dragcolumn2d',
    width: 500,
    height: 400,
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "caption": "Android and iOS Devices Sales Projections",
            "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
            "numberPrefix": "$",
            "numberSuffix": "M",
            "yaxismaxvalue": "200",
            "theme": "fusion",
            "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
        },
        "categories": [{
            "category": [{
                "label": "2014",
                "fontItalic": "0"
            }, {
                "label": "2015",
                "fontItalic": "0"
            }, {
                "label": "2016",
                "fontItalic": "0"
            }, {
                "label": "2017 (Projected)"
            }, {
                "label": "2018 (Projected)"
            }]
        }],
        "dataset": [{
            "seriesname": "Android Devices",
            "data": [{
                "value": "73",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "80",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "97",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "110",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "180",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }, {
            "seriesname": "iOS Devices",
            "data": [{
                "value": "63.2",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "68",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "82",
                "alpha": "100",
                "allowDrag": "0"
            }, {
                "value": "99",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }, {
                "value": "150",
                "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
            }]
        }]
    }
};

class Onoff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Drag any column for years 2017 or 2018 to see updated value along with the label',
    };

    this.dataplotDragEnd = this.dataplotDragEnd.bind(this);
  }

  // Event callback handler for 'dataplotDragEnd' event.
  // Shows a message with the dateset, initial value and final value of the dragged column.
  dataplotDragEnd(eventObj, dataObj) {
    var prevValue = FusionCharts.formatNumber(dataObj.startValue.toFixed(2));
    var curValue = FusionCharts.formatNumber(dataObj.endValue.toFixed(2));
    var labelYear = this.state.chart.args.dataSource.categories[0].category[dataObj.dataIndex].label
    this.setState({
      message: [
        <strong>{eventObj.data.datasetName}</strong>,
        " is modified to ",
        <strong>{'$' + curValue + 'M'}</strong>,
        " from ",
        <strong>{'$' + prevValue + 'M'}</strong>,
        " for ",
        <strong>{labelYear}</strong>
      ]
    });
  }

  render () {
    return (
      <div>
        <ReactFC
          {...chartConfigs}
          fcEvent-dataplotDragEnd={this.dataplotDragEnd}
        />
        <p style={{ padding: '10px', background: '#f5f2f0' }}>
          {this.state.message}
        </p>
      </div>
    )
  }
}

export default Onoff;
