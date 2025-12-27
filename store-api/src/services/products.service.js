import * as productsRepo from '../repositories/products.repository.js';

export async function getProducts() {
    var result = await productsRepo.getProducts();
    return result;
};