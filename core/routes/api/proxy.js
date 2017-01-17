const Router = require('koa-router');

const proxy = new Router();
proxy.all('/', ctx => {
  ctx.body = 'hola';
});

module.exports = proxy;
