const { USER_DATA } = require('../../db/data');

module.exports = (req, res) => {
  const userInfo = USER_DATA.filter((user) => user.id === req.session.userId)[0];

  if (!userInfo) {
    res.status(401).send('Not Authorized');
  } else {
    res.json({ ...userInfo, password: undefined });
  }
};