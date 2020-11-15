const router = require("express").Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json());

router.post("/database/accounts/registerGJAccount.php", async (req, res) => {
	res.send(req.body).status(200);
	console.log(req.body);
});

module.exports = router;