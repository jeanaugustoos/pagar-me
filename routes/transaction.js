'use strict';

const express = require('express');

const PagarMeTransactionService = require('../services/PagarMeTransactionService');

const router = express.Router();

router.get('/', (req, res, next) => {
	
	PagarMeTransactionService.getTransactions((data) => {
		res.send(data);
	});

});

router.post('/new', (req, res, next) => {

	let transaction = {};

	transaction.amount = req.body.amount * 100;
	transaction.payment_method = req.body.payment_method;

	if (req.body.payment_method == 'credit_card') {
  	transaction.card_hash = req.body.card_hash;
  	transaction.card_number = req.body.card_number;
  	transaction.card_holder_name = req.body.card_holder_name;
  	transaction.card_expiration_date = req.body.card_expiration_month + '' + req.body.card_expiration_year;
  	transaction.card_cvv = req.body.card_cvv;
  }

  let recipients = null;

  if (req.body.recipients == 'on') {
  	
  	recipients = [];

  	let recipient = {};
  	recipient.recipient_id = "re_ciq07bjjg00i7s26eb8h0zd0g";
  	recipient.charge_processing_fee = true;
  	recipient.liable = true;
  	recipient.percentage = req.body.recipient1;

  	recipients.push(recipient);

		recipient.recipient_id = "re_cipynoi3y008ixe6dcm8mgd7i";
  	recipient.charge_processing_fee = true;
  	recipient.liable = true;
  	recipient.percentage = req.body.recipient2;  
  	
  	recipients.push(recipient);
	}

  transaction.split_rules = recipients;
  
  PagarMeTransactionService.newTransaction(transaction, (data) => {
  	res.send(data);
  });  
});

router.post('/cancel', (req, res, next) => {
	let id = req.body.id;
	
	PagarMeTransactionService.cancelTransaction(id, (data) => {
		res.send(data);
	});
});

module.exports = router;
