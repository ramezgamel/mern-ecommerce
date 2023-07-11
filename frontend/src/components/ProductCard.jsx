import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div class="group relative">
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-70">
        <img
          src={product.coverImage}
          alt="Front of men&#039;s Basic Tee in black."
          class="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-l text-gray-700 font-semibold">
            <Link to={`${product._id}`}>
              <span aria-hidden="true" class="absolute inset-0"></span>
              {product.name}
            </Link>
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            {product.details.slice(0, 75)}...
          </p>
        </div>
        <p class="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
