var Highcharts = require('highcharts');
// var Highcharts = require('./highcharts.js'); //Highcharts JS v4.1.5
var ChartBase = require('./ChartBase')



class PieChart extends ChartBase {

    plot() {
        const chart = new Highcharts.Chart({
            chart: {
                renderTo: this.renderTo(),
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                margin: 0,
                width: this.width(),
                height: this.height()
            },
            title: {
                text: ''
            },
            legend: {
                layout: 'Horizantol',
                backgroundColor: 'white',
                align: 'bottom',
                verticalAlign: 'middle',
                shadow: false,
                enabled: true,
                y: 100,
                x: 0,
                itemStyle: { "color": "#333333", "cursor": "pointer", "fontSize": "10px", "fontWeight": "normal", "font-family": "Arial" },
                itemWidth: 110,
                symbolPadding: 5,
                symbolWidth: 10,
                symbolHeight: 5,
                itemDistance: 30
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
                    return `${this.point.name}: ${Math.round(this.percentage * Math.pow(10, 2)) / Math.pow(10, 2)} %`;
                }
            },
            plotOptions: {
                series: {
                    shadow: false
                },
                pie: {
                    borderWidth: 0,
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true,
                    size: 200,
                    center: [90, 80],
                    dataLabels: {
                        enabled: false,
                        color: '#333333',
                        distance: 10,
                        connectorWidth: 1,
                        connectorColor: '#333333',
                        formatter() {
                            return `${Math.round(this.percentage * Math.pow(10, 2)) / Math.pow(10, 2)} %`;
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                data: this.seriesData()
            }],
            credits: {
                enabled: false,
                href: "http://www.executiveboard.com",
                text: "www.executiveboard.com"
            }
        });

    }
}



module.exports = PieChart 