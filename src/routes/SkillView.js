
const express = require('express');
const router = express.Router();


router.use('/', require('../controllers/getSkills'))
router.use('/', require('../controllers/createSkill'))

module.exports = router;

