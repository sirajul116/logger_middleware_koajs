const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// const Validator = require('validatorjs');
const Router = require('koa-router');
const jwt = require('jsonwebtoken');

const app = new Koa();
const router = new Router();
const port = 8081;
const jwtSecret = 'hridoy';

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const rules = {
  name: 'required|string',
  id: 'required|integer|min:18',
};

router.post('/login', async (ctx) => {
  const { name, id } = ctx.request.body;

  if (!name || !id) {
    ctx.status = 401;
    ctx.body = { error: 'Wrong data' };
    return;
  }
  const token = jwt.sign({ name, id }, jwtSecret, { expiresIn: '1h' });
  ctx.body = { token: token };
});

app.listen(port, () => {
  console.log(`running on port: http://localhost:${port}`);
});
