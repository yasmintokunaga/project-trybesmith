import express from 'express';
import productsController from './controllers/products.controller';
import ordersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);
app.get('/products', productsController.findAll);
app.get('/orders', ordersController.findAll);

export default app;
