const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const logger = require('koa-logger');

const server = new Koa();

server.use(bodyParser());
server.use(cors());
server.use(logger());

const router = require('./routes');

server.use(router.routes());

server.listen(3000);

// /api/install?npm:module@version
// - download tar
// - extract it
// - open main | index .js
// /api/auth/in
// /api/auth/out
// web
// /
// /home
// /store
// - subdomain for backend?
