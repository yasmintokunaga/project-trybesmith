import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  describe('testar se é listado todos os produtos', async function () {
    const serviceResponse = await productService.findAll();

    expect(serviceResponse).to.deep.eq(productMock.allProductsResponse);
  });
});
