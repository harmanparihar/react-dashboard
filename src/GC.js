import React from 'react';
import ReactDOM from 'react-dom';
import GoogleBar from './GoogleBar.js';
import GoogleLine from './GoogleLine.js';
import GoogleGeo from './GoogleGeo.js';
import GoogleScatter from './GoogleScatter.js';

class GC extends React.Component{

 render(){
  return(
    <div id="gc" className="graphs">
    <h1>Google Charts</h1>
    <GoogleBar width={this.props.width} height={this.props.height} />
    <GoogleLine width={this.props.width} height={this.props.height} />
    <GoogleGeo width={this.props.width} height={this.props.height} />
    <GoogleScatter width={this.props.width} height={this.props.height} />
    </div>
  );
}
}
export default GC;
