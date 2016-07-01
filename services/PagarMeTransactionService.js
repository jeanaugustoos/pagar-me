'use strict';

const PagarMeUtilService = require('./PagarMeUtilService');
const PagarMeConfig = require('../config/PagarMeConfig');

const url = '1/transactions';

const getTransactions = (callback) => {
	
	PagarMeUtilService.callPagarMe('GET', url, 'api_key=' + PagarMeConfig.getApiKey(), callback);
};

const newTransaction = (transaction, callback) => {

	transaction.api_key = PagarMeConfig.getApiKey();
	PagarMeUtilService.callPagarMe('POST', url, transaction, callback);
};

const cancelTransaction = (id, callback) => {
	let data = {'api_key': PagarMeConfig.getApiKey()};
	PagarMeUtilService.callPagarMe('POST', url + '/' + id + '/refund', data, callback);
};

module.exports.getTransactions 	 = getTransactions;
module.exports.newTransaction  	 = newTransaction;
module.exports.cancelTransaction = cancelTransaction;