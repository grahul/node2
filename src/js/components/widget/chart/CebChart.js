'use strict';
import React from "react";
var ReactDom = require('react-dom');
// working for jquery
//////////////////////////////
var $ = require('jquery'); //
window.jQuery = $; //
window.$ = $; //
//////////////////////////////
// var highcharts = require('./../../../../script/ceb/highcharts.src.js');
// var BarChart = require('./../../../../script/ceb/ChartBase.js');
var LineChart = require('./../../../../script/ceb/chartBase/LineChart.js');
var BarChart = require('./../../../../script/ceb/chartBase/BarChart.js');
var stackedBarChart = require('./../../../../script/ceb/chartBase/StackedBarChart.js');
var pieChart = require('./../../../../script/ceb/chartBase/PieChart.js');

// var Es6opps = require('./../../../../script/ceb/es6opps.js');
// require("expose?$!jquery");
// import Highcharts from 'highcharts';
export default class CebChart extends React.Component {
    componentDidMount() {}
    callME() {

            // $('#data').highcharts({
    //     title: {
    //         text: 'Monthly Average Temperature',
    //         x: -20 //center
    //     },
    //     subtitle: {
    //         text: 'Source: WorldClimate.com',
    //         x: -20
    //     },
    //     xAxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Temperature (°C)'
    //         },
    //         plotLines: [{
    //             value: 0,
    //             width: 1,
    //             color: '#808080'
    //         }]
    //     },
    //     tooltip: {
    //         valueSuffix: '°C'
    //     },
    //     legend: {
    //         layout: 'vertical',
    //         align: 'right',
    //         verticalAlign: 'middle',
    //         borderWidth: 0
    //     },
    //     series: [{
    //         name: 'Tokyo',
    //         data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    //     }, {
    //         name: 'New York',
    //         data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    //     }, {
    //         name: 'Berlin',
    //         data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    //     }, {
    //         name: 'London',
    //         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    //     }]
    // });
        var barchart = new BarChart();
        barchart.width(960).height(300).renderTo('divBarChart').category(['Africa', 'America', 'Asia', 'Europe', 'Oceania']).seriesData([{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }]).plot();
        var multibarchart = new BarChart();
        multibarchart.width(960).height(300).renderTo('divMultiBar').category(['Africa', 'America', 'Asia', 'Europe', 'Oceania']).seriesData([{
            name: 'Year 1800',
            data: [107, 31, 635, 203, 2]
        }, {
            name: 'Year 1900',
            data: [107, 31, 635, 203, 2]
        }]).plot();

        var linechart = new LineChart();
        linechart.width(960).height(300).renderTo('divLineChart').category(['2000', '2010', '2011', '2012', '2013', '2014']).seriesData([{
            name: 'Kansas',
            data: [18, 24, 29, 30, 38, 53],
            zoneAxis: 'x',
            zones: [{
                value: 4
            }, {
                dashStyle: 'dot'
            }],
        }, {
            name: 'Ohlo',
            data: [30, 52, 32, 57, 61, 45],
            zoneAxis: 'x',
            zones: [{
                value: 4
            }, {
                dashStyle: 'dot'
            }]
        }]).plot();

                        //stacked bar chart
            var stackedChart = new stackedBarChart();
            stackedChart.width(800).height(400).renderTo('StackedbarChart')
            .category(['Kansas', 'Ohio', 'NY'])
            .seriesData([{
            name: 'John',
            borderWidth: 0,
            data: [20000, 20000, 15000]
        }, {
            name: 'Jane',
            borderWidth: 0,
            data: [20000, 20000, 70000]
        }, {
            name: 'Joe',
            borderWidth: 0,
            data: [30000, 40000, 30000]
        }, {
            name: 'Ntini',
            borderWidth: 0,
            data: [30000, 90000, 20000] 
        }, {
            name: 'Smith',
            borderWidth: 0,
            data: [80000, 10000, 40000]
        }, {
            name: 'Ricky',
            borderWidth: 0,
            data: [30000, 20000, 50000]
        }]).plot();
       
                   var piechart = new pieChart();
            piechart.width(500).height(300).renderTo('divPieChart')
                    .seriesData([{ name: "Africa", y: 56.33 }, { name: "America", y: 24.03 }, { name: "Asia", y: 10.38 }, { name: "Oceania", y: 4.77}])
                    .plot();
    }
                //stacked bar chart
    componentWillMount() {
        console.log('componentWillMount');
    }
    render() {
        return (
        <div>
            <h1>Bar Chart</h1>
            <div id="divBarChart"></div>
            <h1>MultiBar</h1>
            <div id="divMultiBar"></div>
            <h1>PieChart</h1>
            <div id="divPieChart"></div>
            <h1>Line Chart</h1>
            <div id="divLineChart"></div>
            <h1>Stacked Bar</h1>
            <div id="StackedbarChart"></div>
      
        <h1>Js With High Chart <button onClick={this.callME} value="callme">callme</button></h1>
        <div className="atomic-chart" key={this.props.key} data={this.props.datasend} id={this.props.container}></div>
      </div>);
    }
}