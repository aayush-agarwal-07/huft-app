import React from "react";
import { CiStar } from "react-icons/ci";
import { dogProducts } from "../../api/dogs";
import PriceCalculatorApp from "./useSelectedPrice";

const Box = () => {
  return (
    <div className="flex justify-center">
      <div className="my-4 flex flex-wrap items-center gap-[50px] mx-[126px]">
        {dogProducts.map(
          (
            product // Changed filteredProducts to products
          ) => (
            <div
              key={product.id}
              className="border border-blue-800 w-[350px] h-[625px] rounded-xl"
            >
              <img
                src={product.featured_image}
                alt="Dog Products"
                className="w-[350px] m-0 p-0"
              />
              <div className="bg-teal-800 w-[348px] mt-2 flex flex-row text-white font-normal">
                <div className="pt-2 mr-1 ml-2">
                  <CiStar />
                </div>
                <div>
                  Up to{" "}
                  <span className="text-orange-600 font-semibold text-lg">
                    4x Points
                  </span>
                </div>
                <div className="b pt-2 ml-[125px] mr-[5px] font-bold">
                  <CiStar />
                </div>
                <div className="pt-1 mr-2">5.0/5.0</div>
              </div>
              <div className="text-lg font-normal mx-2">
                {product.title.length >= 72
                  ? `${product.title.substring(0, 70)}...`
                  : `${product.title}${" ".repeat(10)}`}
              </div>

              <div>
                <PriceCalculatorApp productId={product.id} />
              </div>
              <button className="absolute bg-orange-600 text-xl font-normal rounded-2xl m-2 px-[114px] py-2 text-white">
                Add To Cart
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Box;
