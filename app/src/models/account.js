const Sequlize = require("sequelize");
const db = require('../database/connection');

module.exports = db.define("account",
    {
        id: {
            type: Sequlize.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        account: Sequlize.STRING(32),
        password: Sequlize.STRING(128)
    },
    {
        tableName: 'account'
    }
);
