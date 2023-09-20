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
    expect(httpResponse.status).to.equal(201);
    expect(httpResponse.body).to.be.deep.equal({ ...productMock.newProductResponse, id: httpResponse.body.id });
  });

  it('ao não receber um name, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noNameProductBody;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"name\" is required" });
  });

  it('ao não receber um price, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.noPriceProductBody;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"price\" is required" });
  });

  it('ao receber um name diferente do tipo string, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.nameAsNumberType;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"name\" must be a string" });
  });

  it('ao receber um price diferente do tipo string, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.priceAsNumberType;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"price\" must be a string" });
  });

  it('ao receber um name com menos de 3 caracteres, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.nameLengthTwoCharacters;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"name\" length must be at least 3 characters long" });
  });

  it('ao receber um price com menos de 3 caracteres, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = productMock.priceLengthTwoCharacters;

    // Act
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(422);
    expect(httpResponse.body).to.be.deep.equal({ "message": "\"price\" length must be at least 3 characters long" });
  });
});
