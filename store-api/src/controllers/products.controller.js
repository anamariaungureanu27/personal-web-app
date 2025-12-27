import * as productsServices from '../services/products.service.js';

export async function getProducts(req, res, next) {
    try {
        var result = await productsServices.getProducts();
        res.json(result);
    } catch (e) {
        next(e);
    }
};