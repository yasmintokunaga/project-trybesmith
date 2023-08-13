import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import createMock from '../../mocks/create.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  describe('testar se é criado um novo produto', async function () {
    const parameters = createMock.newProductRequest;
    const mockCreateReturn = ProductModel.build(createMock.newProductRequest);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const serviceResponse = await productService.create(parameters);

    expect(serviceResponse).to.deep.eq(createMock.newProductResponse);
  });
});
