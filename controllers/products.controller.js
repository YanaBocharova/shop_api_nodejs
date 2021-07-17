const productsService = require('../services/products/products.service');

class ProductsController {
    async getProductByName(req, resp) {
        const name = req.query.name;
        const product = await productsService.findProductByName(name);
        resp.send(product);
    }

    async getAll(req, resp) {
        const products = await productsService.getAllProducts();
        resp.send(products);
    }

    async createProduct(req, resp) {
        const { name, price } = req.body;
        const product = await productsService.createNewProduct(name, price);
        resp.send(product);
    }

    async index(req, resp) {
        const products = await productsService.getAllProducts();
        resp.send(products);
    }

    async removeProduct(req, resp) {
        const id = Number(req.params.id);
        const response = await productsService.removeProductById(id);
        resp.send(response);
    }
}

module.exports = new ProductsController();