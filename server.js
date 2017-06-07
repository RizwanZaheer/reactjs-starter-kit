const path = require('path'),
    port = process.env.PORT || 3000,
	webpack = require('webpack'),
	express = require('express'),
	config = require('./webpack.config');


var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening at http://localhost:${port}/`);
})
