'use strict';

const PagarMeUtilService = require('./PagarMeUtilService');
const PagarMeConfig = require('../config/PagarMeConfig');

const url = '1/recipients';

const getRecipients = (callback) => {
	
	PagarMeUtilService.callPagarMe('GET', url, 'api_key=' + PagarMeConfig.getApiKey(), callback);
};

const newRecipient = (recipient, callback) => {

	let data = recipient;
	data.api_key = PagarMeConfig.getApiKey();

	PagarMeUtilService.callPagarMe('POST', url, data, callback);
};

module.exports.getRecipients = getRecipients;
module.exports.newRecipient  = newRecipient;