import React from 'react';
import ReactDOM from 'react-dom';
import FusionBar from './FusionBar.js';
import FusionLine from './FusionLine.js';
import FusionPie from './FusionPie.js';
import FusionStack from './FusionStack.js';
import Today from './Today.js';

class FC extends React.Component{
render(){
  return(
    <div id="fusion" className="graphs">
    <h1>Fusion Charts <Today /></h1>
    <FusionBar width={this.props.width} height={this.props.height}/>
    <FusionLine width={this.props.width} height={this.props.height}/>
    <FusionPie width={this.props.width} height={this.props.height}/>
    <FusionStack width={this.props.width} height={this.props.height}/>

    </div>
  );
}
}
export default FC;
