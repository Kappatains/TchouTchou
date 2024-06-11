var express = require('express');
var router = express.Router();
const modelUsers = require('../models/modelUsers');
//var userService = require('../service/user.service')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await modelUsers.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/authenticate', (req, res, next) => {
  console.log(req.body);
  userService.authenticate(req.body)
      .then(user => res.json(user))
      .catch(next);
});

router.get ( '/:id' , async function (req , res , next) {
  await modelUsers.findById ( req.params.id , function (
  err , zuser ) {
    if (err)
      res.status (400).send (err);
    if (zuser == null )
      res.status (404).send ('User not found');
    res.send ( zuser ) ;
    }) ;
  }) ;

module.exports = router;