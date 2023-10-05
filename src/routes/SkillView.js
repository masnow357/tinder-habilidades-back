
const express = require('express');
const router = express.Router();

const {Skill} = require('../../models/index')


router.use('/', require('../controllers/getSkills'))
router.use('/', require('../controllers/createSkill'))

module.exports = router;

