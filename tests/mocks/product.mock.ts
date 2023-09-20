const newProductResponse = {
  "id": 6,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro"
};

const newProductRequest = {
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
};

const newProductBuild = {
  "id": 6,
  "name": "Martelo de Thor",
  "price": "30 peças de ouro",
  "orderId": 4
};

const allProductsResponse = [
  {
    "id": 1,
    "name": "Pedra Filosofal",
    "price": "20 gold",
    "orderId": null
  },
  {
    "id": 2,
    "name": "Lança do Destino",
    "price": "100 diamond",
    "orderId": 1
  }
];

const noNameProductBody = {
  price: 'price',
};

const noPriceProductBody = {
  name: 'punhal de mithril',
};

const nameAsNumberType = {
  name: 1,
  price: 'price',
};

const priceAsNumberType = {
  name: 'espada élfica',
  price: 1,
};

const priceLengthTwoCharacters = {
  name: 'espada élfica',
  price: 'um',
};

const nameLengthTwoCharacters = {
  name: 'ar',
  price: '10 peças de prata',
};


export default {
  newProductRequest,
  newProductResponse,
  newProductBuild,
  allProductsResponse,
  noNameProductBody,
  noPriceProductBody,
  nameAsNumberType,
  priceAsNumberType,
  nameLengthTwoCharacters,
  priceLengthTwoCharacters,
};
