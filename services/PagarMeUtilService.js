const request = require('request-json');

const client = request.createClient('https://api.pagar.me');

const callPagarMe = (method, url, data, callback) => {

	if (method == 'GET') {

		client.get(url + '?' + data, (err, res, body) => {
			callback(body);
		});

	} else if (method == 'POST') {

		client.post(url, data, (err, res, body) => {
		  callback(body);
		});

	} else {
		callback(null);
	}
};

module.exports.callPagarMe = callPagarMe;