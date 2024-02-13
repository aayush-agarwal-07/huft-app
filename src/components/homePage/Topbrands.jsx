import React from "react";
import { IoIosColorFilter } from "react-icons/io";

const Topbrands = () => {
  return (
    <div className="mx-8">
      <div className="text-2xl my-8 font-semibold">🏆 Top Brands</div>

      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col justify-between items-center">
          <img
            src="src/assets/topBrands/allDayMuseli.png"
            className="w-[190px]"
          />
          <div>Chicken & Brown Rice</div>
          <div className="border border-orange-500 w-20 my-1" />
          <div>Starting at Rs99/-</div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <img
            src="src/assets/topBrands/allDayMuseli.png"
            className="w-[190px]"
          />
          <div>Chicken & Brown Rice</div>
          <div className="border border-orange-500 w-20 my-1" />
          <div>Starting at Rs99/-</div>
        </div>

        <div className="flex flex-col justify-between items-center">
          <img
            src="src/assets/topBrands/allDayMuseli.png"
            className="w-[190px]"
          />
          <div>Chicken & Brown Rice</div>
          <div className="border border-orange-500 w-20 my-1" />
          <div>Starting at Rs99/-</div>
        </div>
      </div>

      <div>
        <div className="text-2xl my-8 font-semibold">⚡️ Specials By Price</div>
        <div>
          <div className="inline-flex flex-between items-center px-3 bg-orange-200 p-2 w-[270px] h-[70px] rounded-lg">
            <div className="flex flex-start items-center">
              <div className="font-bold text-3xl">
                Rs 99 <span className="text-gray-400 text-2xl">& Under</span>
              </div>
            </div>
            <div className="flex justify-end items-center pl-8 text-2xl">
                <IoIosColorFilter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbrands;

{
  /* <img
          src="src/assets/topBrands/allDayMuseli.png"
          className="w-[190px]"
        /> */
}
