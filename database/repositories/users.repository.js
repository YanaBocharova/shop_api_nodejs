const sequelize = require('../../database/db-connection');
const User = require('../../database/models/users.model')(sequelize);

class UsersRepository {
    async find(options) {
        return User.findOne(options);
    }
    async findAll(options) {
        return User.findAll(options);
    }

    async create(email, password) {
        return User.create({ email, password });
    }

    async delete(id) {
        return User.destroy({ where: { id: id } });
    }
}

module.exports = new UsersRepository();
