const { response } = require('express');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	const obj = {data: {
				0:{topping: "cherry", quantity: "2" }, 
  				1:{topping: "plain", quantity: "6" },
				2:{topping: "chocolate", quantity: "3"}
			}};
	res.json(obj);
});

module.exports = router;