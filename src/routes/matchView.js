const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')


router.use('/', require('../controllers/createMatch'))

module.exports = router;

