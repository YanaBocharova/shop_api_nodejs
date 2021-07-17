const tokensRepository = require('../../database/repositories/tokens.repository');

class TokensService {
    async createNewToken(userId) {
        console.log('UserId ', userId);
        return tokensRepository.create(userId);
    }
}

module.exports = new TokensService();
