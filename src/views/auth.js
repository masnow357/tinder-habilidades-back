const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {
    
    const {user, password} = await req.body;

    console.log(user, password);

    res.send("respondido :3")

})

module.exports = router;