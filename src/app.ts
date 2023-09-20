import express from 'express';
import productsController from './controllers/products.controller';
import ordersController from './controllers/orders.controller';
import userController from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post(
  '/products',
  productsController.validateNameProduct,
  productsController.validatePriceProduct,
  productsController.create,
);
app.get('/products', productsController.findAll);
app.get('/orders', ordersController.findAll);
app.post(
  '/login',
  userController.validateFields,
  userController.verifyUserPassword,
  userController.login,
);

export default app;
