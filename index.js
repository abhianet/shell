const server = require('koa')();
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const logger = require('koa-logger');

server.use(bodyParser());
server.use(cors());
server.use(logger());


const apps = new Router();
apps.post('/', function* () {
  this.body = 'hiya';
});

const api = new Router();
api.use('/apps', apps.routes(), apps.allowedMethods());

const router = new Router();
router.use('/api', api.routes(), api.allowedMethods());

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
