module.exports = async (app, req, res) => {
	if (!req.body.userName || !req.body.password || !req.body.email) return res.status(400).send("-1")
}