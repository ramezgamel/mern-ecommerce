import React from "react";
import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";
const ProductsByCategory = () => {
  const { category, id } = useParams();
  // get product by category and pass to Product list
  return <ProductList></ProductList>;
};

export default ProductsByCategory;
