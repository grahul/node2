var path = require('path');
var express = require('express');
var webpack = require('webpack');

var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);
app.use(express.static(__dirname + '/src'));


/**
 * Rahul G
 * Dashboard for webpack
 */
// var Dashboard = require("webpack-dashboard")
// var DashboardPlugin = require("webpack-dashboard/plugin")
// var dashoboard = new Dashboard();
// compiler.apply(new DashboardPlugin(dashoboard.setData));

var routes = require('./expressRoute');
// app.use(express.static('public'));
// app.use(express.static('files'));
// app.use('/files', express.static('public'));

app.use(require('webpack-dev-middleware')(compiler, {
  // quiet:true,
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/about',routes.about)
app.get('/info',routes.info)
app.get('/bar',routes.bar)

var APIv1 = require('./expressRoute/api1.js')
var APIv2 = require('./expressRoute/api2.js')
var APIv3 = require('./expressRoute/group.js')
var APIv4 = require('./expressRoute/downloadAPI.js')
var APIv5 = require('./expressRoute/formatter.js')
app.use('/api/v1',APIv1)
app.use('/api/v2',APIv2)
app.use('/api/v3',APIv3)
app.use('/api/v4',APIv4)
app.use('/api/v5',APIv5)
app.get('/chart1', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({"title":{"text":"Monthly Average Temperature","x":"-20"},"subtitle":{"text":"Source WorldClimate.com","x":-20},"xAxis":{"categories":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},"yAxis":{"title":{"text":"Temperature (°C)"},"plotLines":[{"value":"0","width":"1","color":"#808080"}]},"tooltip":{"valueSuffix":"°C"},"legend":{"layout":"vertical","align":"right","verticalAlign":"middle","borderWidth":0},"series":[{"name":"Tokyo","data":[7.0,6.9,9.5,14.5,18.2,21.5,25.2,26.5,23.3,18.3,13.9,9.6]},{"name":"New York","data":[-0.2,0.8,5.7,11.3,17.0,22.0,24.8,24.1,20.1,14.1,8.6,2.5]},{"name":"Berlin","data":[-0.9,0.6,3.5,8.4,13.5,17.0,18.6,17.9,14.3,9.0,3.9,1.0]},{"name":"London","data":[3.9,4.2,5.7,8.5,11.9,15.2,17.0,16.6,14.2,10.3,6.6,4.8]}]}));
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(process.env.PORT || 5000, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000');
});
