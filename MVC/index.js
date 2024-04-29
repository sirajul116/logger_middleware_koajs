const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const responseHandler = require('./handler/response');

const app = new Koa();
const port = 8085;

app.use(bodyParser());
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`running on port: http://localhost:${port}`);
});
