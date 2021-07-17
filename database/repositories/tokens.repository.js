const sequelize = require('../../database/db-connection');
const Token = require('../../database/models/token.model')(sequelize);
const tokenHelper = require('../../helpers/token.helper');

class TokensRepository {
    async create(userId) {
        const token = await Token.create({
            token: tokenHelper.generateToken(),
            userId: userId
        });
        return token;
    }
}


module.exports = new TokensRepository();
