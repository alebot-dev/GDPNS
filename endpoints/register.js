module.exports = async (app, req, res) => {
	if (!req.body.userName || !req.body.password || !req.body.email) return res.status(400).send("-1")
	let thing_i_dont_know_if_it_works = {
		username: req.body.userName,
		password: req.body.password,
		email: req.body.email
	}
	res.status(200).send(thing_i_dont_know_if_it_works)
}