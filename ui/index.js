const Koa = require('koa');
const serve = require('koa-static');

const ui = new Koa();
ui.use(serve('./dist'));

module.exports = ui;
