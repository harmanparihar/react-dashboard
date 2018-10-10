import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';
import { Chart } from "react-google-charts";
import Donut from './Donut.js';
import Multiple from './Multiple.js';
import Event from './Event.js';
import Onoff from './Onoff.js';
import Sidebar from './Sidebar.js';
import Chart3d from './Chart3d.js';
import FC from './FC.js';
import GC from './GC.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      width:"100%",
      height: "400px",
      showGC:false,
      showFC:true,
    }
  }
  getInitialState() {
          return { showGC: false, showFC:true };
  }
  GConClick() {
            this.setState({ showGC: true, showFC:false});
  }
  FConClick() {
            this.setState({ showGC: false, showFC: true });
  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar gcclick={this.GConClick.bind(this)} fcclick={this.FConClick.bind(this)} />
        <div>
        { this.state.showFC ? <FC width={this.state.width} height={this.state.height}/>: null }
        { this.state.showGC ? <GC  width={this.state.width} height={this.state.height}/> : null }

        </div>
    </div>
    );
  }
}

export default App;
