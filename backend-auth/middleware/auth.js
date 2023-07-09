const verifyToken = (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];

	if(!token){
		return res.status(403).send('Unidentified token.');
	}

	try {
		const decoded = redis.get(token);
		if(decoded == ''){
			return res.status(401).send('Token expired. Try loggin in again.');
		}
		req.user = decoded;
		return res.status(200);
	} catch (e) {
		console.error("ERROR DURING AUTHENTICATION IN MIDDLEWARE: ", e);
		return res.status(403).send('Invalid token.');
	}

	return next(req, res);
}

module.exports = verifyToken;