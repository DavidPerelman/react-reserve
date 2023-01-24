import products from '../../static/products.json';

const productsApi = (req, res) => {
  res.status(200).json(products);
};

export default productsApi;
