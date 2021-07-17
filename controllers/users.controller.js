const usersService = require('../services/users/users.service');

class UsersController {
    async getUserByEmail(req, resp) {
        const email = req.query.email;
        const user = await usersService.findUserByEmail(email);
        resp.send(user);
    }

    async createUser(req, resp) {
        // TODO: validation
        const { email, password } = req.body;
        const user = await usersService.createNewUser(email, password);
        resp.send(user);
    }

    async index(req, resp) {
        const users = await usersService.getAllUsers();
        resp.send(users);
    }

    async removeUser(req, resp) {
        const id = Number(req.params.id);
        const response = await usersService.removeUserById(id);
        resp.send(response);
    }
}

module.exports = new UsersController();
