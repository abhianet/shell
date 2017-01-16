const Router = require('koa-router');

const proxy = new Router();
proxy.all('/', (ctx, next) => {
  ctx.body = 'hola';
});

module.exports = proxy;
