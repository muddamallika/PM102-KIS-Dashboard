var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*Health check api*/
router.get('/healthcheck', function(req, res) {
  var responseString = 'OK';
  res.send(responseString);
});

module.exports = router;
