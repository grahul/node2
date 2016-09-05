import React from "react";
var ReactDom = require('react-dom');



export default class HighmapsME extends React.Component {

  componentDidMount() {

      $.ajax({
          url: this.props.type,
          type: 'GET',
          success: function(data) {
          console.log('ajax data', data);
              if(data.data){
                var chart = Highcharts.chart(this.props.container, {
                    series: [{
                        data:data.data
                    }],
                });
              }

          }.bind(this),
          error: function(data) {

          }
      })


  }

    render() {
    return (
      <div>
      
    
        <h1> Data with  ajax call config data {this.props.config}</h1>
       	<div className="atomic-chart" key={this.props.key} data={this.props.config} id={this.props.container}></div>
      </div>
    );
  }
}

