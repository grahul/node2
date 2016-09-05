var Highcharts = require('highcharts');//Highcharts JS v4.2.5
// var Highcharts = require('./highcharts.src.js'); //Highcharts JS v4.2.5
// var Highcharts = require('./highcharts.4.1.5.src.js'); //Highcharts JS v4.1.5

// var Highcharts = require('./javascebcopy');//Highcharts JS v4.1.5


// var Highcharts = require('./highcharts.js'); //Highcharts JS v4.1.5

class ChartBase {
    constructor() {
        Highcharts.getOptions().colors = ['#00Aeef', '#f4b213', '#9cc84b', '#2bc4b6', '#8d64aa', '#0a3f6b', '#aa5019', '#416428', '#00566b', '#46295b', '#7fd6f7', '#f9d889', '#cde3a5', '#95e1da', '#c6b1d4'];

    }

    width(_x) {
        if (!arguments.length) return this._width;
        this._width = _x;
        return this;
    }

    height(_y) {
        if (!arguments.length) return this._height;
        this._height = _y;
        return this;
    }

    renderTo(_id) {
        if (!arguments.length) return this._renderTo;
        this._renderTo = _id;
        return this;
    }

    displayName(_val) {
        if (!arguments.length) return this._displayName;
        this._displayName = _val;
        return this;
    }

    category(_val) {

        if (!arguments.length) return this._category;
        this._category = _val;
        return this;
    }

    seriesData(_val) {

        if (!arguments.length) return this._seriesData;
        this._seriesData = _val;
        return this;
    }

    plot() {
        //'The plot function has not been defined.'
    }

    title(_val) {
        if (!arguments.length) return this._title;
        this._title = _val;
        return this;
    }

    subtitle(_val) {

        if (!arguments.length) return this._subtitle;
        this._subtitle = _val;
        return this;
    }
}

class LineChart extends ChartBase {

    plot() {
        const chart = new Highcharts.Chart({
            chart: {
                renderTo: this.renderTo(),
                defaultSeriesType: 'line',
                width: this.width(),
                height: this.height(),
                marginTop: 40,
                backgroundColor: '#ffffff'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.category(),
                tickWidth: 0,
                labels: {
                    style: {
                        fontSize: '11px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#333333'
                    }
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: '#E2E2E2',
                gridLineWidth: 1,
                gridLineDashStyle: 'Solid',
                title: {
                    text: '',
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#333333'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#939598'
                    }
                }
            },
            legend: {
                floating: false,
                borderRadius: 0,
                borderWidth: 0,
                shadow: false,
                enabled: true,
                backgroundColor: '#ffffff',
                itemStyle: {
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    color: '#939598'
                }
            },
            tooltip: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'Arial',
                    color: '#333333',
                    fontWeight: 'bold'
                },
                borderColor: '#c2c2c2',
                backgroundColor: '#ffffff',
                borderRadius: 3,
                borderWidth: 2,
                shadow: false,
                formatter() {
                    return Highcharts.numberFormat(this.y, 0);
                }
            },
            plotOptions: {
                series: {
                    shadow: false
                },
                 allowPointSelect: true,
                column: {
                    borderWidth: 0,
                    bordorColor: '#ffffff',
                    pointPadding: 0,
                    dataLabels: {
                        enabled: false,
                        rotation: 270,
                        y: -25,
                        x: 2,
                        style: {
                            color: '#333333',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                        },
                        formatter() {
                            return Highcharts.numberFormat(this.y, 0);
                        }
                    }
                }
            },
            series:this.seriesData(),
            navigation: {
                buttonOptions: {
                    align: 'right',
                    backgroundColor: 'white',
                    height: 17,
                    width: 20,
                    symbolSize: 10,
                    symbolX: 10,
                    symbolY: 8,
                    symbolStrokeWidth: 1,
                    symbolStroke: '#364F6A'
                }
            },
            credits: {
                enabled: false,
                href: "http://www.executiveboard.com/",
                text: "www.executiveboard.com"
            }
        });


    }
}

class BarChart extends ChartBase {

    plot() {
        const chart = new Highcharts.Chart({
            chart: {
                renderTo: this.renderTo(),
                defaultSeriesType: 'column',
                width: this.width(),
                height: this.height(),
                marginTop: 40,
                backgroundColor: '#ffffff'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: this.category(),
                tickWidth: 0,
                labels: {
                    style: {
                        fontSize: '11px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#333333'
                    }
                }
            },
            yAxis: {
                min: 0,
                gridLineColor: '#E2E2E2',
                gridLineWidth: 1,
                gridLineDashStyle: 'Solid',
                title: {
                    text: '',
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#333333'
                    }
                },
                labels: {
                    style: {
                        fontSize: '12px',
                        fontFamily: 'Arial',
                        fontWeight: 'normal',
                        color: '#939598'
                    }
                }
            },
            legend: {
                floating: false,
                borderRadius: 0,
                borderWidth: 0,
                shadow: false,
                enabled: true,
                backgroundColor: '#ffffff',
                itemStyle: {
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    color: '#939598'
                }
            },
            tooltip: {
                style: {
                    fontSize: '13px',
                    fontFamily: 'Arial',
                    color: '#333333',
                    fontWeight: 'bold'
                },
                borderColor: '#c2c2c2',
                backgroundColor: '#ffffff',
                borderRadius: 3,
                borderWidth: 2,
                shadow: false,
                formatter() {
                    return Highcharts.numberFormat(this.y, 0);
                }
            },
            plotOptions: {
                series: {
                    shadow: false
                },
                column: {
                    borderWidth: 0,
                    bordorColor: '#ffffff',
                    pointPadding: 0,
                    dataLabels: {
                        enabled: false,
                        rotation: 270,
                        y: -25,
                        x: 2,
                        style: {
                            color: '#333333',
                            fontSize: '12px',
                            fontFamily: 'Arial'
                        },
                        formatter() {
                            return Highcharts.numberFormat(this.y, 0);
                        }
                    }
                }
            },
            series: this.seriesData(),
            navigation: {
                buttonOptions: {
                    align: 'right',
                    backgroundColor: 'white',
                    height: 17,
                    width: 20,
                    symbolSize: 10,
                    symbolX: 10,
                    symbolY: 8,
                    symbolStrokeWidth: 1,
                    symbolStroke: '#364F6A'
                }
            },
            credits: {
                enabled: false,
                href: "http://www.executiveboard.com/",
                text: "www.executiveboard.com"
            }
        });

    }
}


// class PieChart extends ChartBase {

//     plot() {
//         const chart = new Highcharts.Chart({
//             chart: {
//                 renderTo: this.renderTo(),
//                 plotBackgroundColor: null,
//                 plotBorderWidth: null,
//                 plotShadow: false,
//                 margin: 0,
//                 width: this.width(),
//                 height: this.height()
//             },
//             title: {
//                 text: ''
//             },
//             legend: {
//                 layout: 'Horizantol',
//                 backgroundColor: 'white',
//                 align: 'bottom',
//                 verticalAlign: 'middle',
//                 shadow: false,
//                 enabled: true,
//                 y: 100,
//                 x: 0,
//                 itemStyle: { "color": "#333333", "cursor": "pointer", "fontSize": "10px", "fontWeight": "normal", "font-family": "Arial" },
//                 itemWidth: 110,
//                 symbolPadding: 5,
//                 symbolWidth: 10,
//                 symbolHeight: 5,
//                 itemDistance: 30
//             },
//             tooltip: {
//                 style: {
//                     fontSize: '13px',
//                     fontFamily: 'Arial',
//                     color: '#333333',
//                     fontWeight: 'bold'
//                 },
//                 borderColor: '#c2c2c2',
//                 backgroundColor: '#ffffff',
//                 borderRadius: 3,
//                 borderWidth: 2,
//                 shadow: false,
//                 formatter() {
//                     return `${this.point.name}: ${Math.round(this.percentage * Math.pow(10, 2)) / Math.pow(10, 2)} %`;
//                 }
//             },
//             plotOptions: {
//                 series: {
//                     shadow: false
//                 },
//                 pie: {
//                     borderWidth: 0,
//                     allowPointSelect: true,
//                     cursor: 'pointer',
//                     showInLegend: true,
//                     size: 200,
//                     center: [90, 80],
//                     dataLabels: {
//                         enabled: false,
//                         color: '#333333',
//                         distance: 10,
//                         connectorWidth: 1,
//                         connectorColor: '#333333',
//                         formatter() {
//                             return `${Math.round(this.percentage * Math.pow(10, 2)) / Math.pow(10, 2)} %`;
//                         }
//                     }
//                 }
//             },
//             series: [{
//                 type: 'pie',
//                 data: this.seriesData()
//             }],
//             credits: {
//                 enabled: false,
//                 href: "http://www.executiveboard.com",
//                 text: "www.executiveboard.com"
//             }
//         });

//     }
// }







// class StackedBarChart extends ChartBase {
//     constructor() {
//         super();
//     }

//     plot() {
//         const chart = new Highcharts.Chart({
//             chart: {
//                 renderTo: this.renderTo(),
//                 defaultSeriesType: 'bar', //bar,column
//                 width: this.width(),
//                 height: this.height(),
//                 marginTop: 40,
//                 backgroundColor: '#ffffff'
//             },
//             title: {
//                 text: this.title(),  // || this.text  // have to ask
//                 align:'left'
//             },
//             subtitle: {
//                 text: this.subtitle(),  // || this.text  // have to ask
//                 align:'left'
//             },
//             xAxis: {
//                 categories: this.category(),
//                 tickWidth: 0,
//                 labels: {
//                     style: {
//                         fontSize: '11px',
//                         fontFamily: 'Arial',
//                         fontWeight: 'normal',
//                         color: '#333333'
//                     }
//                 }
//             },
//             yAxis: {
//                 min: 0,
//                 gridLineColor: '#E2E2E2',
//                 gridLineWidth: 1,
//                 gridLineDashStyle: 'Solid',
//                 title: {
//                     text: '',
//                     style: {
//                         fontSize: '12px',
//                         fontFamily: 'Arial',
//                         fontWeight: 'normal',
//                         color: '#333333'
//                     }
//                 },
//                 labels: {
//                     style: {
//                         fontSize: '12px',
//                         fontFamily: 'Arial',
//                         fontWeight: 'normal',
//                         color: '#939598'
//                     }
//                 },
//                 stackLabels: {
//                     enabled: true,
//                     verticalAlign: 'top',
//                     x:2,
//                     y:-32,
//                     formatter() {
//                         // return Highcharts.numberFormat(this.y, 0);
//                     },
//                     style: {
//                         fontWeight: 'normal',
//                         color: 'gray'
                        
//                     }
//                 },
//             },
//             legend: {
//                 floating: false,
//                 borderRadius: 0,
//                 borderWidth: 0,
//                 shadow: false,
//                 enabled: true,
//                 backgroundColor: '#ffffff',
//                 itemStyle: {
//                     fontSize: '12px',
//                     fontFamily: 'Arial',
//                     fontWeight: 'normal',
//                     color: '#939598'
//                 }
//             },
//             tooltip: {
//                 style: {
//                     fontSize: '13px',
//                     fontFamily: 'Arial',
//                     color: '#333333',
//                     fontWeight: 'bold'
//                 },
//                 borderColor: '#c2c2c2',
//                 backgroundColor: '#ffffff',
//                 borderRadius: 3,
//                 borderWidth: 2,
//                 shadow: false,
//                 formatter() {
//                     return Highcharts.numberFormat(this.y, 0);
//                 }
//             },
//             plotOptions: {
//                 series: {
//                     shadow: false,
//                     stacking: 'normal'
//                 },
//                  allowPointSelect: true,
//                 column: {
//                     borderWidth: 0,
//                     bordorColor: '#ffffff',
//                     pointPadding: 0,
//                     dataLabels: {
//                         enabled: false,
//                         rotation: 270,
//                         y: -25,
//                         x: 2,
//                         style: {
//                             color: '#333333',
//                             fontSize: '12px',
//                             fontFamily: 'Arial'
//                         },
//                         formatter() {
//                             return Highcharts.numberFormat(this.y, 0);
//                         }
//                     }
//                 }
//             },
//             series:this.seriesData(),
//             navigation: {
//                 buttonOptions: {
//                     align: 'right',
//                     backgroundColor: 'white',
//                     height: 17,
//                     width: 20,
//                     symbolSize: 10,
//                     symbolX: 10,
//                     symbolY: 8,
//                     symbolStrokeWidth: 1,
//                     symbolStroke: '#364F6A'
//                 }
//             },
//             credits: {
//                 enabled: false,
//                 href: "http://www.executiveboard.com/",
//                 text: "www.executiveboard.com"
//             }
//         },
//         function(chart) {
//             var lineSeries = {
//               dataLabels: {
//                 enabled: false
//               },
//               type: 'line',
//               data: [],
//               marker: {
//                 enabled: false,
//               },
//               enableMouseTracking: false,
//               showInLegend: false
//             };
//             Highcharts.each(chart.series[0].data, function(p, i) {
//               lineSeries.data.push(null)
//               lineSeries.data.push([p.x - 0.4, p.total])
//               lineSeries.data.push([p.x + 0.4, p.total])
//             });
//             chart.addSeries(lineSeries)
//           }
//         );


//     }

// }


module.exports = BarChart 
// module.exports = PieChart 
module.exports = LineChart 
// module.exports = StackedBarChart 