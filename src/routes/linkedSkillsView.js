const express = require('express');
const router = express.Router();

const {Linked_skill} = require('../../models/index')


router.use('/', require('../controllers/addLinkedSkill'))
router.use('/', require('../controllers/getLinkedSkills'))

module.exports = router;

