const jwt = require('jsonwebtoken');
const jwtSecret = 'hridoy';

const verifyToken = (ctx, next) => {
  const token = ctx.headers.authorization.split(' ')[1];
  if (!token) {
    ctx.status = 501;
    console.log('token not found');
    return;
  }
  try {
    const decoded = jwt.verify(token, jwtSecret);
    const currTime = Date.now() / 1000;
    if (decoded.exp && currTime > decoded.exp) {
      ctx.throw(401, 'token expired');
    }
    ctx.state.user = decoded;
  } catch (err) {
    ctx.throw(401, 'Authentication failed');
  }
  return next();
};

module.exports = verifyToken;
