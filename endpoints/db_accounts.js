const router = require("express").Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json());

router.post("/registerGJAccount.php", async (req, res) => {
	const { Account } = require("../models/index");
	console.log(new Account);
	res.send("1").status(200);
});

module.exports = router;