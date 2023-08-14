import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/products.service';


chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  xit('testar se é criado um novo produto - SERVICE', async function () {
    const parameters = productMock.newProductRequest;
    const mockCreateReturn = ProductModel.build(productMock.newProductBuild);
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);

    const serviceResponse = await productService.create(parameters);
    expect(serviceResponse).to.be.deep.eq(productMock.newProductBuild);
  });

  it('testar se é criado um novo produto - INTEGRAÇÃo', async function () {
    // Arrange
    const httpRequestBody = productMock.newProductRequest;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    // console.log(httpResponse);
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal(productMock.newProductResponse);
});
});
