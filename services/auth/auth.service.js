const usersService = require('../users/users.service');

class AuthService {
    async register(email, password) {
        return usersService.createNewUser(email, password);
    }
}


module.exports = new AuthService();
