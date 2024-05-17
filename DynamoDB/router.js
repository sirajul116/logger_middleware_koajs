const Router = require('koa-router');
const {
  getShopDetails,
  createShop,
  removeShop,
  updateShop,
  getDetail,
} = require('./controllers/shop');

const router = new Router();
router.get('/shop/:id', getShopDetails);
router.get('/shop/name/:sname', getDetail);
router.post('/create', createShop);
router.delete('/delete/:id', removeShop);
router.put('/update', updateShop);
module.exports = router;
