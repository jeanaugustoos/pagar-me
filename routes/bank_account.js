'use strict';

const express = require('express');

const PagarMeBankAccountService = require('../services/PagarMeBankAccountService');

const router = express.Router();

router.get('/', (req, res, next) => {

	PagarMeBankAccountService.getBankAccounts((data) => {
		res.send(data);	
	});
	
});

router.post('/new', (req, res, next) => {

	let bank_account = {};

	bank_account.bank_code = req.body.bank_code;
  bank_account.agencia = req.body.agencia;
  bank_account.agencia_dv = req.body.agencia_dv;
  bank_account.conta = req.body.conta;
  bank_account.conta_dv = req.body.conta_dv;
  bank_account.document_number = req.body.document_number;
  bank_account.legal_name = req.body.legal_name;

	PagarMeBankAccountService.newBankAccount(bank_account, (data) => {
		res.send(data);
	});
});

module.exports = router;
