const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')

router.get('/RU', mainController.RUmainPage)

router.get('/RU/payments', mainController.RUpaymentsPage)

// router.get('/EN', mainController.ENmainPage)
// router.get('/EN/payments', mainController.ENpaymentsPage)

module.exports = router
