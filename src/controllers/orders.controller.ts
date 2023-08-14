import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import productsService from '../services/products.service';

async function findAll(req: Request, res: Response) {
  const orders = await ordersService.findAll();
  const products = await productsService.findAll();

  const joinOrdersProducts = orders.map((order) => (
    {
      ...order,
      productIds: products 
        .filter(({ orderId }) => orderId === order.id)
        .map(({ id }) => id),
    }
  ));
  res.status(200).json(joinOrdersProducts);
}

export default {
  findAll,
};
