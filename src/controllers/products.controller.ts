import { NextFunction, Request, Response } from 'express';
import productsService from '../services/products.service';

function validateNameProduct(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required'});
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string'});
  }

  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long'});
  }

  next();
}

function validatePriceProduct(req: Request, res: Response, next: NextFunction) {
  const { price } = req.body;

  if (!price) {
    return res.status(400).json({ message: '"price" is required'});
  }

  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string'});
  }

  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long'});
  }

  next();
}

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
  validateNameProduct,
  validatePriceProduct,
};
