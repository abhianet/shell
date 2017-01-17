const Router = require('koa-router');

const apps = new Router();
apps.post('/', ctx => {
  ctx.body = 'hiya';
});

module.exports = apps;
