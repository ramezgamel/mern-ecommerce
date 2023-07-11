import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Search from "../components/Search";
import MenuDropDown from "../components/MenuDropDown";
const Navbar = () => {
  return (
    <div className="w-full h-[60px] flex justify-between bg-gray-200 px-5 items-center">
      <ul className="flex gap-2 items-center">
        <h1 className="font-bold text-xl border-r-2 border-gray-400 pr-2 mr-2 text-blue-500">
          <Link to="/user" className="hover:text-blue-300 transition">
            RG.Store
          </Link>
        </h1>
        <NavLink
          to="/user/mobile/253"
          className={({ isActive }) =>
            isActive
              ? "pb-1 border-b-2 border-black text-sm font-bold transition"
              : "hover:text-gray-300 transition text-sm"
          }
        >
          Mobiles
        </NavLink>
        <NavLink
          to="/user/laptop/253"
          className={({ isActive }) =>
            isActive
              ? "pb-1 border-b-2 border-black text-sm font-bold transition"
              : "hover:text-gray-300 transition text-sm"
          }
        >
          Laptops
        </NavLink>
        <NavLink
          to="/user/clothes/253"
          className={({ isActive }) =>
            isActive
              ? "pb-1 border-b-2 border-black text-sm font-bold transition"
              : "hover:text-gray-300 text-sm transition"
          }
        >
          Clothes
        </NavLink>
      </ul>
      <div className="hidden sm:flex">
        <Search />
      </div>
      <ul className=" gap-2 items-center hidden sm:flex">
        <Link className="hover:text-gray-300 transition">About</Link>
        <Link className="hover:text-gray-300 transition">Contact</Link>
        <MenuDropDown />
        <AiOutlineShoppingCart color="#999" />
      </ul>
    </div>
  );
};

export default Navbar;
