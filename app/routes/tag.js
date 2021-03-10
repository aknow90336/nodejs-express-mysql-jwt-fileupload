const router = require('express').Router()
const tagController = require('../controllers/tagController')

router.get('/', tagController.queryTag)
router.post('/create', tagController.createTag)
router.post('/update/:id', tagController.updateTag)
router.delete('/delete/:id', tagController.deleteTag)

module.exports = router