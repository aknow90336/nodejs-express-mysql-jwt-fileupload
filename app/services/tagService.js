const Tag = require('../src/models/tagModel')

var tagService = function () { }

tagService.prototype.get = function (id, callback) {
    Tag.findAll({
        where:{
            id: id,
        }
    }).then(tags => {
        callback(tags)
    }).catch(err => {
        console.log(err)
    })
}

tagService.prototype.query = function (callback) {
    Tag.findAll(
    ).then(tags => {
        callback(tags)
    }).catch(err => {
        console.log(err)
    })
}

tagService.prototype.createTag = function (name, callback) {
    Tag.create({ name: name, }, { fields: ['name'] }
    ).then(function (tag) {
        callback(tag.dataValues)
    }).catch(err => {
        console.log(err)
    })
}

tagService.prototype.updateTag = function (id, name, callback) {
    Tag.update({ name: name, }, { where: { id: id }}
    ).then(function (tag) {
        callback(tag)
    }).catch(err => {
        console.log(err)
    })
}

tagService.prototype.deleteTag = function (id, callback) {
    Tag.destroy({ where: { id: id }},
    ).then(function (tag) {
        callback()
    }).catch(err => {
        console.log(err)
    })
}

module.exports = new tagService()