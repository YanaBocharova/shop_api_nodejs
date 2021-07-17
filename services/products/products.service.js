const productsRepository = require('../../database/repositories/products.repositories');

class ProductsService {
    async findProductByName(name) {
        return productsRepository.find({
            where: {
                nameproduct: name
            }
        });
    }
    async createNewProduct(name, price) {
        const product = await productsRepository.create(name, price);
        return product;
    }

    async getAllProducts() {
        return productsRepository.findAll({raw:true});
    }

    async removeProductById(id) {
        try {
            await productsRepository.delete(id);
            return {
                code: 200,
                message: `Product with id = ${id} was deleted!`
            };
        } catch(err) {
            return {
                code: 400,
                message: err
            };
        }
    }
}

module.exports = new ProductsService();
