import axios from 'axios';
import { useEffect } from 'react';

function Home({ products }) {
  console.log(products);
  // useEffect(() => {
  //   getProducts();
  // }, []);

  // const getProducts = async () => {
  //   const url = 'http://localhost:3000/api/products';
  //   const response = await axios.get(url);
  //   console.log(response.data);
  // };

  return <>home</>;
}

Home.getInitialProps = async () => {
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  console.log(response.data);

  return { products: response.data };
};

export default Home;
