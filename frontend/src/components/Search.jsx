import React, { useState } from "react";
import s from "../styles/style";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {
  useGetAllProductsQuery,
  useGetProductByIdMutation,
} from "../store/productsApi";
import LoadingSpinner from "./LoadingSpinner";
import MenuDropDown from "./MenuDropDown";
import { server } from "../constants";
import ProductCard from "./ProductCard";
import Modal from "./Modal";

const Search = () => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: allProducts,
    isLoading,
    isSuccess,
    isError,
  } = useGetAllProductsQuery({ keyword: search });
  window.addEventListener("click", (e) => setClicked(false));
  const [getProduct, productResult] = useGetProductByIdMutation();
  const handleClick = (id) => {
    getProduct(id);
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div onClick={() => setIsOpen(true)} className="w-[100%] relative">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            setClicked(true);
            setSearch(e.target.value);
          }}
          className="h-[30px] w-full px-2 border-gray-400 border-[2px] rounded-md"
        />
        <AiOutlineSearch
          size={20}
          className="absolute top-1.5 right-2 cursor-pointer"
        />
        {isError ? (
          <h1 className="absolute bg-slate-50 shadow-sm-2 z-[9] p-4 text-center font-bold font-xl">
            No data with same input!
          </h1>
        ) : clicked && allProducts && allProducts.length !== 0 ? (
          <div className="absolute w-[100%] mt-1 ring-1 ring-gray-300 rounded-md bg-slate-50 shadow-sm-2 z-[9] p-4">
            {allProducts &&
              allProducts.response.map((item) => (
                <div
                  onClick={() => handleClick(item._id)}
                  key={item._id}
                  className="w-full flex items-start-py-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[40px] h-[40px] mr-[10px]"
                  />
                  <h1>{item.name}</h1>
                </div>
              ))}
          </div>
        ) : (
          isLoading && <LoadingSpinner />
        )}
      </div>
    </>
  );
};

export default Search;
