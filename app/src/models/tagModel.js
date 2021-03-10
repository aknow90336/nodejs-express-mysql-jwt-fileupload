const Sequelize = require('sequelize')
const db = require('../database/connection')

module.exports = db.define("tag",
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: Sequelize.STRING(32),
    },
    {
        timestamps: false,
        tableName: 'tag'
    }
)
