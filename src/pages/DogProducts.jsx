import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { dogProducts } from "../api/dogs";
import { NavigationFeatured } from "../components/dogProducts/useFeatured";
import PriceCalculatorApp from "../components/dogProducts/useSelectedPrice";

const TruncatedTitle = ({ title, maxLength }) => {
  if (title.length > maxLength) {
    return <span>{`${title.substring(0, maxLength)}......`}</span>;
  }
  return <span>{title}</span>;
};

const DogProducts = () => {
  const maxLength = 70;
  const [filteredProducts, setFilteredProducts] = useState(dogProducts);

  const filterProductsByType = () => {
    const filtered = dogProducts.filter((product) =>
      product.type.toLowerCase().includes("food")
    );
    setFilteredProducts(filtered);
  };

  const filterProductsByBedding = () => {
    const filtered = dogProducts.filter(
      (product) =>
        product.type.toLowerCase().includes("bed") ||
        product.type.toLowerCase().includes("mat")
    );
    setFilteredProducts(filtered);
  };

  const filterProductsByTreat = () => {
    const filtered = dogProducts.filter(
      (product) =>
        product.type.toLowerCase().includes("treat") ||
        product.type.toLowerCase().includes("biscuits")
    );
    setFilteredProducts(filtered);
  };

  const filterProductsByGrooming = () => {
    const filtered = dogProducts.filter(
      (product) =>
        !product.type.toLowerCase().includes("food") &&
        !product.type.toLowerCase().includes("bed") &&
        !product.type.toLowerCase().includes("mat") &&
        !product.type.toLowerCase().includes("treat") &&
        !product.type.toLowerCase().includes("biscuits")
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <img src="https://shorturl.at/uvLO3" />
      <div className="bg-orange-200 w-full">
        <div className="flex justify-between gap-6 items-center mx-[100px] py-[30px]">
          <div className="text-xl font-normal text-gray-800">
            Show Filter | {filteredProducts.length} Products{" "}
          </div>
          <div className="flex justify-end items-center gap-2">
            <div className="text-xl font-normal text-gray-800">Sort by:</div>
            <div>{<NavigationFeatured />}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="flex justify-between items-center gap-4 mt-7">
          <li className="flex items-start gap-4">
            <div
              className="flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105"
              onClick={filterProductsByType}
            >
              <img
                src="src/assets/Categories/dogFood.png"
                className="w-[75px] hover:w-[90px]"
              />
              <div className="text-lg font-normal py-2 ">Food</div>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105"
              onClick={filterProductsByBedding}
            >
              <img
                src="src/assets/Categories/beds&Mats.png"
                className="w-[75px] hover:w-[90px]"
              />
              <div className="text-lg font-normal py-2 text-center">
                Bedding <br />& Mats
              </div>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105"
              onClick={filterProductsByTreat}
            >
              <img
                src="src/assets/Categories/dogTreats.png"
                className="w-[75px] hover:w-[90px]"
              />
              <div className="text-lg font-normal py-2 text-center">
                Treats, Biscuits <br />& Chews
              </div>
            </div>
            <div
              className="flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105"
              onClick={filterProductsByGrooming}
            >
              <img
                src="src/assets/Categories/grooming.png"
                className="w-[75px] hover:w-[90px]"
              />
              <div className="text-lg font-normal py-2">Grooming</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <div className="m-[55px] flex flex-wrap items-center gap-[50px] mx-[126px]">
          {filteredProducts.map((product) => (
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
                <div className="b pt-2 ml-[75px] mr-1 font-bold">
                  <CiStar />
                </div>
                <div className="pt-1 mr-2">5.0/5.0</div>
              </div>
              <div className="text-lg font-normal mx-2">
                <TruncatedTitle title={product.title} maxLength={maxLength} />
              </div>
              <div>
                <PriceCalculatorApp productId={product.id} />
              </div>
              <button className="absolute bg-orange-600 text-xl font-normal rounded-2xl m-2 px-[114px] py-2 text-white">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogProducts;
