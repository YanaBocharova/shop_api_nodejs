const {Model} = require("sequelize");
const Sequelize = require('sequelize');
const hashHelper = require('../../helpers/hash-helper');

module.exports = (sequelize) => {
    const User = sequelize.define('user', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            set(value) {
                this.setDataValue('password', hashHelper.generate(value));
            }
        },
    });

    return User;
};