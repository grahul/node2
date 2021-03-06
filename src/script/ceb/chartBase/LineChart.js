var Highcharts = require('highcharts');
// var Highcharts = require('./highcharts.js'); //Highcharts JS v4.1.5
var ChartBase = require('./ChartBase')
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

module.exports = LineChart 