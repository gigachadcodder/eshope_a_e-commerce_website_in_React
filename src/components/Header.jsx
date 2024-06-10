import React from "react";
import { IoIosBasket } from "react-icons/io";
import { IoStorefront } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="flex flex-row justify-between  w-full items-center text-white bg-blue-950 px-4 py-3">
      <Link to={"/"}>
      <div className="flex  text-xl items-center gap-2">
        <IoStorefront />
        <span>eShope</span>
      </div>
      </Link>
      <div className="flex flex-row items-center w-[60%]">
        <input
          className="w-full px-2 text-gray-400"
          type="text"
          placeholder="What are you looking for ?"
        />
        <div className="bg-orange-400 ">
          <IoIosSearch />
        </div>
      </div>
      <div className="flex justify-between items-center w-[20%]">
        <div className="flex flex-col">
          <span className="text-xs">Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Your</span>
          <span>Shop</span>
        </div>
        <Link to={"/checkout"}>
          <div>
            <IoIosBasket />
            <span></span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
