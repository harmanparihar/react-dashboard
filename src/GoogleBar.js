import React from 'react';
import './App.css';
import { Chart } from "react-google-charts";
class GoogleBar extends React.Component {
  render() {

     return (
       <Chart className="chart"
        chartType="ColumnChart"
        spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE"
        spreadSheetQueryParameters={{
         headers: 1,
         query: 'SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8',
        }}
        options={{
         hAxis: {
           textStyle:{color: '#FFF'}
         },
         vAxis: {
           format: 'long',
           textStyle:{color: '#FFF'}
         },
         titleTextStyle: {
        color: '#333333'
        },

         backgroundColor: '#262a33',
         legendTextStyle: {color:'#FFF'},
         colors: ['#586ba4','#f5dd90','#f68e5f','#324376','#f76c5e'],
        }}
        rootProps={{ 'data-testid': '2' }}
        height={this.props.height}
        width={this.props.width}
        />
     );
  }
}
export default GoogleBar;
