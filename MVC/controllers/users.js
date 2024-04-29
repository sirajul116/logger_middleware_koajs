const { get, post } = require('../models/User');
exports.get = (ctx) => {
  try {
    const data = get();
    ctx.response.ok('get method called', { ...data });
  } catch (error) {
    ctx.response.fail('user invalid', error);
  }
};

exports.post = (ctx) => {
  try {
    const data = post();
    ctx.status = 200;
    ctx.response.ok('Successfull post method', { ...data });
  } catch (error) {
    ctx.status = 400;
    ctx.response.fail('user invalid', error);
  }
};
