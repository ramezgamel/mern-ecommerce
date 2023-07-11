import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const product = {
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
  };
  const [mainImage, setMainImage] = useState(product.images[0]);
  return (
    <div className="flex justify-between gap-3 py-10 px-5">
      <div className="flex flex-col gap-3 w-2/12">
        {product.images.map((image) => (
          <div
            className="w-[100%] h-[100px]"
            onClick={() => setMainImage(image)}
          >
            <img
              className={
                image === mainImage
                  ? "object-fit w-[100%] h-[100%] border-4 border-solid border-blue-400"
                  : "object-fit w-[100%] h-[100%]"
              }
              src={image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="w-5/12 border-l-2">
        <img src={mainImage} alt="" />
      </div>
      <div className="flex flex-col gap-2 w-5/12">
        <h1>{product.name}</h1>
        <p>{product.details}</p>
        <h3>{product.creator}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
