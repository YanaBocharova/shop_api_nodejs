const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Token = sequelize.define('token', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
    });

    return Token;
};
