import express from 'express';
import productsController from './controllers/products.controller';

const app = express();

app.use(express.json());

app.post('/products', productsController.create);

export default app;
