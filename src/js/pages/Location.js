import React from "react";

import BarChart from "../components/widget/chart/barChart";
import LineChart from "../components/widget/chart/lineChart";
import MultibarChart from "../components/widget/chart/multibarChart";
import PieChart from "../components/widget/chart/pieChart";
import StackedChart from "../components/widget/chart/stackedChart";
import Search from './Search';
import HighmapsME from "../components/widget/chart/HighmapsME";



export default class Location extends React.Component {


	constructor() {
	  	super()
	    this.state = {
	      type :'bar',
        parms:''
	    };

  }






	

  render() {

    return (
      <div>
        <Search/>
        demo
        <h2>BarChart </h2>
        <HighmapsME 
            container="Chart1"
            parms = {this.state.parms}
            type={this.state.type}
            key="1"/>
      </div>
    );
  }
}