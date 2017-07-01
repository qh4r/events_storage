import http from 'http';
import express from 'express';
import cors from 'cors';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from "webpack-hot-middleware";

// This is last resort. it's impossible to make it work otherwise. Setting env in terminal is not working too.
// please adjust to production if needed
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpackConfig = require(`../config/webpack.config.${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}.js`);

let app = express();
const server = http.createServer(app);

const compiler = webpack(webpackConfig);

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler, {
  'log': false,
  'path': '/__webpack_hmr',
  'heartbeat': 10 * 1000,
}));

app.use(express.static('public'));

const port = 13131;

server.listen(port, () => {
  console.info(`server listening on port ${port}.`);
});
