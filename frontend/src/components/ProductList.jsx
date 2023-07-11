import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const products = [
    {
      _id: 1,
      category: "Mobile",
      creator: "Ramez",
      price: 1200,
      name: "iPhone",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates quis atque eveniet quia eos pariatur repellendus, exercitationem voluptatum dicta nulla, harum ipsa nemo nam praesentium illu",
      images: [
        "/logo512.png",
        "/Screenshot 2022-08-13 151213.png",
        "/Screenshot 2023-04-07 124615.png",
      ],
      coverImage: "/logo512.png",
    },
    {
      _id: 2,
      category: "Mobile",
      creator: "Ramez",
      price: 1200,
      name: "iPhone",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptates quis atque eveniet quia eos pariatur repellendus, exercitationem voluptatum dicta nulla, harum ipsa nemo nam praesentium illu",
      images: [
        "/logo512.png",
        "/Screenshot 2022-08-13 151213.png",
        "/Screenshot 2023-04-07 124615.png",
      ],
      coverImage: "/logo512.png",
    },
  ];
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
