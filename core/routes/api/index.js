const Router = require('koa-router');

const apps = require('./apps');
const proxy = require('./proxy');

const api = new Router();
api.use('/apps', apps.routes(), apps.allowedMethods());
api.use('/proxy', proxy.routes(), proxy.allowedMethods());

module.exports = api;
