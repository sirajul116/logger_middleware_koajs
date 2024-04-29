const Router = require('koa-router');
const { get, post } = require('./controllers/users');

const router = new Router();

router.get('/users', get);
router.post('/users', post);

module.exports = router;
