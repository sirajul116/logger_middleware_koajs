const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Validator = require('validatorjs');

const app = new Koa();
const port = 8080;

app.use(bodyParser());

const rules = {
  name: 'required|string',
  id: 'required|integer|min:18',
};

app.use(async (ctx) => {
  const body = ctx.request.body;
  const validator = new Validator(body, rules);
  if (validator.passes()) {
    ctx.status = 200;
    ctx.body = `Name: ${body.name} and Id: ${body.id}`;
  } else {
    ctx.status = 400;
    ctx.body = 'Request body is not valid Json';
  }
});

app.listen(8080, () => {
  console.log(`running on port: http://localhost:${port}`);
});
