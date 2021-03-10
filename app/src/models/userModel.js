const Sequelize = require("sequelize");
const db = require('../database/connection');

module.exports = db.define("user",
    {
        id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        account: Sequelize.STRING(32),
        password: Sequelize.STRING(128),
    },
    {
        timestamps: false,
        tableName: 'user'
    }
);
