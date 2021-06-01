const express = require('express')
const useController = require('../controller/user')
const router = express.Router()

router.post('/user', useController.createUser)

module.exports = router