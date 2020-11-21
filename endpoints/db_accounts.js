const router = require("express").Router()
const bodyParser = require("body-parser")
router.use(bodyParser.json());

router.post("/registerGJAccount.php", async (req, res) => {
	const { Account } = require("../models/index");
	const body = req.body;
	try {
		const Doc = await new Account({
			accID: body.accID,
			username: body.userName,
			password: body.password,
			email: body.email,
			ms: body.ms,
			frs: body.frs,
			cs: body.cs,
			ip: body.ip
		});
		const save = await Doc.save();
		console.log(save);
	} catch {
		return res.send("-1").status(400);
	}
	res.send("1").status(200);
});

module.exports = router;