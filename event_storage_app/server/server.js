/* eslint-disable import/no-dynamic-require,no-console */
import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { handlePreRender } from './prerenderMiddleware';
import { parseDefaultState } from './parseDefaultState';

// This is last resort. it's impossible to make it work otherwise. Setting env in terminal is not working too.
// please adjust to production if needed
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpackConfig = require(`../config/webpack.config.${process.env.NODE_ENV === 'development' ? 'dev' : 'prod'}.js`);

const app = express();
const server = http.createServer(app);

const compiler = webpack(webpackConfig);

app.use(cors());
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true,
}));

app.use(webpackHotMiddleware(compiler, {
  log: false,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

app.use(express.static('public/resources'));

app.use('*', handlePreRender(() => parseDefaultState()));

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  return next(err);
});

// error handlers are not useful considering I went with *.

if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500);
    return res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);
  return res.render('error', {
    message: err.message,
    error: {},
  });
});

const port = 13131;

server.listen(port, () => {
  console.info(`server listening on port ${port}.`);
});
