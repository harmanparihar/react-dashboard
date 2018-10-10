import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";

const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  hAxis: {
  textStyle:{color: '#FFF'},
  titleTextStyle: {
        color: '#fff'
    },
  },
  vAxis: {
    textStyle:{color: '#FFF'},
    titleTextStyle: {
          color: '#fff'
    },
  },
  backgroundColor: '#262a33',
  legendTextStyle: {color:'#FFF'},
  colors: ['#f5dd90','#f76c5e'],
  titleTextStyle: {
        color: '#fff',
  }
};
const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2008", 1030, 540],
  ["2009", 1000, 400],
  ["2010", 1170, 460],
  ["2011", 660, 1120],
  ["2012", 1030, 540]
];
class GoogleScatter extends React.Component {
  render() {
     return (
         <Chart
         className="chart"
         chartType="ScatterChart"
         data={data}
         options={options}
         legendToggle
         height={this.props.height}
         width={this.props.width}
         />
     );
  }
}
export default GoogleScatter;
