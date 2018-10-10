import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";
class GoogleLine extends React.Component {
  render() {
     return (
       <Chart className="chart"
         chartType="LineChart"
         spreadSheetUrl="https://docs.google.com/spreadsheets/d/1vyi-Yd3JnvcYhKY6utMVGZcQa5TkW21nCMN8gx7GKi0/edit?usp=sharing"
         options={{
           hAxis: {
             title: 'Year',
             format: '0000',
             textStyle:{color: '#FFF'}
           },
           vAxis: {
             title: 'CO2 Emissions',
             format: '000',
             textStyle:{color: '#FFF'}
           },
           chart:{
             title: 'CO2 Emission trends over 1998-2017',
             subtitle: 'Data Source: NASA',
           },
           backgroundColor: '#262a33',
           titleTextStyle: {
             color: '#333333'
           },
           colors: ['#f5dd90'],
           legendTextStyle: {color:'#FFF'},
         }}
         rootProps={{ 'data-testid': '1' }}
         height={this.props.height}
         width={this.props.width}
       />
     );
  }
}
export default GoogleLine;
