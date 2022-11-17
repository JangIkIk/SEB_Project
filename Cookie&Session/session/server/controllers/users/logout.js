module.exports = (req, res) => {
  if (!req.session.userId) {
    res.status(400).send('Not Authorized');
  } else {
    req.session.destroy();
    res.status(205).send('Logged Out Successfully');
  }
};