'use strict';

const express = require('express');

const PagarMeRecipientService = require('../services/PagarMeRecipientService');

const router = express.Router();

router.get('/', (req, res, next) => {

	PagarMeRecipientService.getRecipients((data) => {
		res.send(data);	
	});
	
});

router.post('/new', (req, res, next) => {

	let recipient = {};

	recipient.transfer_interval = req.body.transfer_interval;
  recipient.transfer_day = req.body.transfer_day;
  recipient.transfer_enabled = req.body.transfer_enabled;
  recipient.automatic_anticipation_enabled = req.body.automatic_anticipation_enabled;
  recipient.anticipatable_volume_percentage = req.body.anticipatable_volume_percentage;
  recipient.bank_account_id = req.body.bank_account_id;

	PagarMeRecipientService.newRecipient(recipient, (data) => {
		res.send(data);
	});
});

module.exports = router;
