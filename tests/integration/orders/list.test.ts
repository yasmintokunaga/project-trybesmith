import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import orderMock from '../../mocks/order.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('testar se é listado as ordens - INTEGRAÇÃo', async function () {
    // Act
    const httpResponse = await chai.request(app).get('/orders');

    // Assert
    // console.log(httpResponse);
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.be.deep.equal(orderMock.allOrdersResponse);
  });
});
