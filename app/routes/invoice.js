const router = require('express').Router()
const authController = require('../controllers/authController')
const invoiceController = require('../controllers/invoiceController')

const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

var type = upload.single("invoice")

router.post('/upload', authController.authenticate, type, invoiceController.upload)

module.exports = router