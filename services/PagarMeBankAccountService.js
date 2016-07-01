'use strict';

const PagarMeUtilService = require('./PagarMeUtilService');
const PagarMeConfig = require('../config/PagarMeConfig');

const url = '1/bank_accounts';

const getBankAccounts = (callback) => {
	
	PagarMeUtilService.callPagarMe('GET', url, 'api_key=' + PagarMeConfig.getApiKey(), callback);
};

const newBankAccount = (bank_account, callback) => {

	let data = bank_account;
	data.api_key = PagarMeConfig.getApiKey();
	
	PagarMeUtilService.callPagarMe('POST', url, data, callback);
};

module.exports.getBankAccounts = getBankAccounts;
module.exports.newBankAccount  = newBankAccount;