import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao não receber um username, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.noUsernameLoginBody;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal(loginMock.errorMessageRequiredFields);
  });

  it('ao não receber um password, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.noPasswordLoginBody;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal(loginMock.errorMessageRequiredFields);
  });

  it('ao eceber um username invalido, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.invalidUsername;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal(loginMock.errorMessageInvalidFields);
  });

  it('ao receber um password invalido, retorne um erro', async function () {
    // Arrange
    const httpRequestBody = loginMock.invalidPassword;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(401);
    expect(httpResponse.body).to.be.deep.equal(loginMock.errorMessageInvalidFields);
  });

  it('ao receber um username e um password validos, retorne um token', async function () {
    // Arrange
    const httpRequestBody = loginMock.validUsernameAndPassword;

    // Act
    const httpResponse = await chai.request(app).post('/login').send(httpRequestBody);

    // Assert
    expect(httpResponse.status).to.equal(200);
  });
});
