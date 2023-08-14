import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';

async function findAll(): Promise<Order[]> {
  const ordersModel = await OrderModel.findAll();
  const orders = ordersModel.map((order) => order.toJSON() as Order);
  return orders;
}

export default {
  findAll,
};
