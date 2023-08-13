import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function create(product: ProductInputtableTypes): Promise<Product> {
  const newProduct = await ProductModel.create(product);

  return newProduct.dataValues;
}

async function findAll(): Promise<Product[]> {
  const productsModel = await ProductModel.findAll();
  const products = productsModel.map((product) => product.toJSON() as Product);
  return products;
}

export default {
  create,
  findAll,
};
