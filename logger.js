const koa = require('koa');
const app = new koa();
const port = 8080;

app
  .use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} Execution time: ${ms}ms`);
  })
  .use(async (ctx, next) => {
    ctx.body = 'Implementing Server Logger with Koa js';
  });

app.listen(port, () => {
  console.log(`running on port http://localhost:${port}`);
});
