const application = require('koa')();
const router = require('koa-router')();

application.use(function *() {
  this.body = 'Hello World';
});

application.listen(3000);



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
