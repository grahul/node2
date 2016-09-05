var Highcharts = require('highcharts');
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

module.exports = ChartBase 