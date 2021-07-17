const usersRepository = require('../../database/repositories/users.repository');
const tokensService = require('../../services/tokens/tokens.service');

class UsersService {
    async findUserByEmail(email) {
        return usersRepository.find({
            where: {
                email: email
            }
        });
    }

    async createNewUser(email, password) {
        const user = await usersRepository.create(email, password);
        await tokensService.createNewToken(user.id);
        return user;
    }

    async getAllUsers() {
        return usersRepository.findAll({raw:true});
    }

    async removeUserById(id) {
        try {
            await usersRepository.delete(id);
            return {
                code: 200,
                message: `User with id = ${id} was deleted!`
            };
        } catch(err) {
            return {
                code: 400,
                message: err
            };
        }
    }
}

module.exports = new UsersService();
