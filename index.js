const Koa = require('koa');
const logger = require('koa-logger');
const mount = require('koa-mount');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');

const server = new Koa();

server.use(bodyParser());
server.use(cors());
server.use(logger());

server.use(mount('/api', require('./api')));
server.use(mount('/ui', require('./ui')));

server.listen(3000);

// /api/install?npm:module@version
// - download tar
// - extract it
// - open main | index .js
// /api/auth/in
// /api/auth/out
// ui
// /
// /home
// /store
// - subdomain for backend?
