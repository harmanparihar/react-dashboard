import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";

const data_map = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];

class GoogleGeo extends React.Component {
  render() {
     return (
       <Chart
       className="chart"
       chartType="GeoChart"
       data={data_map}
       options={{
         backgroundColor: '#262a33',
         colors: ['#f76c5e'],
       }}
       chartEvents={[
         {
           eventName: "select",
           callback: ({ chartWrapper }) => {
             const chart = chartWrapper.getChart();
             const selection = chart.getSelection();
             if (selection.length === 0) return;
             const region = data_map[selection[0].row + 1];
             console.log("Selected : " + region);
           }
         }
       ]}
       height={this.props.height}
       width={this.props.width}


       />
     );
  }
}
export default GoogleGeo;
