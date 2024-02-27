import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-18 flex flex-between items-center px-10 py-2 gap-10">
      <img src="src/assets/logo_new.png" alt="logo" className="w-[240px]" />
      <input
        type="text"
        placeholder="Search anything for your pet..."
        className="rounded-2xl border border-gray-500 w-[730px] h-[35px] pl-2"
      ></input>
      <div className="flex gap-1 cursor-pointer">
        <div className="pt-1"><IoCallOutline /></div>
        <div>Support</div>
      </div>
      <div className="flex gap-1 cursor-pointer">
        <div className="pt-1"><VscAccount /></div>
        <div>Account</div>
      </div>
      <div className="flex gap-1 cursor-pointer">
        <div className="pt-1"><IoCartOutline /></div>
        <div>Cart</div>
      </div>
    </nav>
  );
};

export default Navbar;
