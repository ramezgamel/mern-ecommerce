import React from "react";
import ProductList from "../components/ProductList";
import Pagination from "../components/Pagination";
const Home = () => {
  return (
    <div>
      <ProductList />
      <Pagination />
    </div>
  );
};

export default Home;
