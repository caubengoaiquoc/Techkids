const express = require("express");
const router = express.Router();

const authController = require("./controller");

router.post("/", (req, res) => {
  authController
    .login(req.body)
    .then(userInfo => {
      req.session.userInfo = userInfo;
      res.send(userInfo);
    })
    .catch(error => res.status(500).send(error.err));
});

router.get("/", (req, res) => {
  if(req.session.userInfo) res.send(req.session.userInfo.username);
  else res.send('');
});


router.delete("/", (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

module.exports = router;
