const express = require('express')
const router = express.Router()
const path = require('path')
const resgisterController = require('../controller/registerController')

router.post('/', resgisterController.handleNewUser)

module.exports = router;
