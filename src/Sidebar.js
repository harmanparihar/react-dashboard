import React from 'react';
import ReactDOM from 'react-dom';
class Sidebar extends React.Component{

  render(){
    return(
      <div className="sidebar">
        <h1>React Dashboard</h1>
        <h2>Prototype</h2>
        <ul>
          <li onClick={this.props.fcclick}><a href="#fusion"><i className="fas fa-chart-area"></i>Dashboard</a></li>
          <li onClick={this.props.gcclick}><a href="#google"><i className="fas fa-chart-pie"></i>Google Charts</a></li>
          <li><a href="#plotly"><i className="fas fa-chart-line"></i>Plotly</a></li>
          <li onClick={this.props.fcclick}><a href="#fusion"><i className="fas fa-chart-bar"></i>Fushion Charts</a></li>
        </ul>
      </div>
    );
  }
}
export default Sidebar;
