import React from "react";
var ReactDom = require('react-dom');



export default class HighmapsME extends React.Component {


 	componentDidMount() {


  }
  componentWillReceiveProps(props) {
  
  }
    render() {
    return (
      <div>
      
      
        <h1> sssssss {this.props.datasend}</h1>
       	<div className="atomic-chart" key={this.props.key} data={this.props.datasend} id={this.props.container}></div>
      </div>
    );
  }
}

