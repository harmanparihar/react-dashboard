import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import { Chart } from "react-google-charts";
import Donut from './Donut.js';
import Bar from './Bar.js';
import Multiple from './Multiple.js';
import Event from './Event.js';
import Onoff from './Onoff.js';
import Sidebar from './Sidebar.js';
import Chart3d from './Chart3d.js';
const options = {
  title: "Age vs. Weight comparison",
  hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Weight/Height", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};
const data_map = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["RU", 700]
];
const data = [
  ["Age", "Weight"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];
class Graph extends React.Component {
  render() {
    return (
        <div>
          <div className={"my-pretty-chart-container"}>
          <Chart
          chartType="ScatterChart"
          data={[["Age", "Weight","Height"], [4, 5.5,125],[5,20,200], [8, 12,180]]}
          width="100%"
          height="400px"
          options={{
          hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
          vAxis: { title: "Weight", viewWindow: { min: 0, max: 220 } },}}
          legendToggle
          />
          </div>
          <Chart
          chartType="ScatterChart"
          data={data}
          options={options}
          width="100%"
          height="400px"
          legendToggle
          />
          <Chart
          chartEvents={[
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 0) return;
                const region = data[selection[0].row + 1];
                console.log("Selected : " + region);
              }
            }
          ]}
          chartType="GeoChart"
          width="500px"
          height="400px"
          data={data_map}
          />
          <Donut />
          <Bar />
          <Chart
          chartType="ScatterChart"
          spreadSheetUrl="https://docs.google.com/spreadsheets/d/1jN0iw0usssnsG1_oi-NXtuKfsUsGme09GsFidbqxFYA/edit#gid=0"
          options={{
            hAxis: {
              format: 'short',
            },
            vAxis: {
              format: 'decimal',
              // format:'scientific'
              // format:'long'
              // format:'percent'
            },
          }}
          rootProps={{ 'data-testid': '1' }}
          />
          <Multiple />
          <Event />
          <Onoff />

          <Chart
            chartType="LineChart"
            spreadSheetUrl="https://docs.google.com/spreadsheets/d/1vyi-Yd3JnvcYhKY6utMVGZcQa5TkW21nCMN8gx7GKi0/edit?usp=sharing"
            options={{
              hAxis: {
                title: 'Year',
                format: '0000',
              },
              vAxis: {
                title: 'CO2 Emissions',
                format: '000',
              },
              chart:{
                title: 'CO2 Emission trends over 1998-2017',
                subtitle: 'Data Source: NASA',
              },
              height:'400px',
              width: '500px',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <Chart
  chartType="ColumnChart"
  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE"
  spreadSheetQueryParameters={{
    headers: 1,
    query: 'SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8',
  }}
  options={{
    // hAxis: {
    // format:'short'
    // },
    vAxis: {
      format: 'long',
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
<Chart3d />
        </div>
    );
  }
}

export default Graph;
