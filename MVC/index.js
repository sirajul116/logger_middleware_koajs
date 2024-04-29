const Koa = require('koa');
const { koaBody } = require('koa-body');
const router = require('./router');
const responseHandler = require('./handler/response');

const app = new Koa();
const port = 8085;

app.use(koaBody());
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`running on port: http://localhost:${port}`);
});
