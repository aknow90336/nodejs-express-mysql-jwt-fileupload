const tagService = require('../services/tagService')

const tagController = {
    queryTag: function (req, res) {
        tagService.query(function (data) {
            res.status(200).json({ data: data })
        })
    },
    createTag: function (req, res) {
        tagService.createTag(req.body.name, function (data) {
            res.status(200).json(data)
        })
    },
    updateTag: function (req, res) {  
        tagService.updateTag(req.params.id, req.body.name, function (data) {
            res.status(200).json({ message: 'successs' })
        })
    },
    deleteTag: function (req, res) {
        tagService.deleteTag(req.params.id, function () {
            res.status(200).json({ message: 'successs' })
        })
    },
}

module.exports = tagController