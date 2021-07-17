const sequelize = require('../../database/db-connection');
const Product = require('../../database/models/products.model')(sequelize);

class ProductsRepository {
    async find(options) {
        return Product.findOne(options);
    }
    async findAll(options) {
        return Product.findAll(options);
    }

    async create(name, price) {
        return Product.create({ name, price });
    }

    async delete(id) {
        return Product.destroy({ where: { id: id } });
    }
}

module.exports = new ProductsRepository();