import React from "react";
var ReactDom = require('react-dom');
{
/*
// import Highcharts from 'highcharts/highstock';
// import Highcharts from 'highcharts-release/highcharts';
// import highcharts from 'highcharts';
// import highchartsMore from 'highcharts-more';
// highchartsMore(highcharts);

 */}
export default class Chart extends React.Component {
  // highchartsModules() {
  //   if (this.props.modules) {
  //     this.props.modules.forEach(function(module) {
  //       module(Highcharts);
  //     });
  //   }
  // }
  componentDidMount() {

      console.log('this.props.container', this.props.container);
      console.log('this.props.options', this.props.options);
    this.highchartsModules();

    this.chart = new Highcharts[this.props.type || "Chart"](
      this.props.container,
      this.props.options
    );
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return (
      <div className="atomic-chart" key={this.props.key} id={this.props.container}></div>
    );
  }
}