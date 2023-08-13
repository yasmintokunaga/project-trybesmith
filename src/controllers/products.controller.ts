import { Request, Response } from 'express';
import productsService from '../services/products.service';

async function create(req: Request, res: Response) {
  const { name, price, orderId } = req.body;
  const product = await productsService.create({ name, price, orderId });
  const configReturn = { name: product.name, id: product.id, price: product.price };
  res.status(201).json(configReturn);
}

async function findAll(req: Request, res: Response) {
  const products = await productsService.findAll();
  res.status(200).json(products);
}

export default {
  create,
  findAll,
};
