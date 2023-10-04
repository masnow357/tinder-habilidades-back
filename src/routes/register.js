
const express = require('express');
const router = express.Router();

String.prototype.hashCode = require('../utils/hash')

const {User} = require('../../models/index')

process.env.SECRET_KEY

// create
router.post('/', async (req, res) => {
  const {name, user_name, password, email} = req.body;

	let {is_company} = req.body;

  if (typeof name !== 'string'){
    res.json({
      message: 'Invalid name'
    })
  }

	if (!(is_company === 'true' || is_company === 'false')){
		res.json({
			message: 'Invalid Data'
		})
	}else{
		is_company = Boolean(is_company)
		console.log(typeof is_company, "is_company")
	}

  if (typeof email !== 'string'){
    res.json({
      message: 'Invalid email'
    })
  }

  if (typeof user_name !== 'string'){
    res.json({
      message: 'Invalid user_name'
    })
  }

  if (typeof password !== 'string'){
    res.json({
      message: 'Invalid password'
    })
  }
  let user
  try {
    user = await User.create({
		name: name,
		user_name: user_name,
		password: password.hashCode(),
		email: email,
		is_company: is_company
    });
    user.save();
  } catch (error) {
    res.json({
      message: 'Error saving data',
      error: error.errors
    })
  }

  res.json({
    message: 'User saver correctly',
    data: {id: user.id}
  })
})

module.exports = router;

