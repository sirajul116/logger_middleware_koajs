const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(ctx);
  await next();
});

app.use(async (ctx, next) => {
  ctx.body = 'Hello Koa';
});

app.listen(8080, () => {
  console.log('running');
});
