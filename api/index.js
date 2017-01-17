const Koa = require('koa');
const route = require('koa-route');

const qbList =
  route
    .get('/qb', ctx => {
      ctx.body = 'hello qb';
    });

const qbAction =
  route
    .post('/qb', ctx => {
      ctx.body = JSON.stringify({
        query: ctx.query
      });
    });

const qbCatch =
  route
    .all('/qb/(.*)', ctx => {
      ctx.body = JSON.stringify({
        url: ctx.url,
        query: ctx.query
      });
    });

const api = new Koa();
api.use(qbList);
api.use(qbAction);
api.use(qbCatch);

module.exports = api;
