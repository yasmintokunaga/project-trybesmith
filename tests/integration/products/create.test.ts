import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import createMock from '../../mocks/create.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  xit('testar se é criado um novo produto - SERVICE', async function () {
    const parameters = createMock.newProductRequest;
    const mockCreateReturn = ProductModel.build(createMock.newProductBuild);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const serviceResponse = await productService.create(parameters);
    expect(serviceResponse).to.be.deep.eq(createMock.newProductBuild);
  });

  it('testar se é criado um novo produto - INTEGRAÇÃo', async function () {
    // Arrange
    const httpRequestBody = createMock.newProductRequest;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    // console.log(httpResponse);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(createMock.newProductResponse);
});
});
