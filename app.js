'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const transaction = require('./routes/transaction');
const recipient = require('./routes/recipient');
const bankAccount = require('./routes/bank_account');

app.use(express.static(__dirname + "/views"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/transaction', transaction);
app.use('/recipient', recipient);
app.use('/bank_account', bankAccount);

app.listen(3000, () => {
	console.log('Server running!');
})