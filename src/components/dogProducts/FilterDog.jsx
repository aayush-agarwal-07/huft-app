import React, { useState } from "react";
import { Link } from "react-router-dom";
import { dogProducts } from "../../api/dogs";
import Box from "./Box";

const FilterDog = () => {
  const [filteredProducts, setFilteredProducts] = useState(dogProducts);

  const filterProductsByType = (type) => {
    const filtered = dogProducts.filter((product) =>
      product.type.toLowerCase().includes(type)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex justify-center w-full h-[200px]">
      <ul className="flex justify-between items-center gap-4 mt-7">
        <li className="h-[150px] flex items-start gap-4 relative">
          <Link to="/dog-products/food" className="w-[100px] flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105" onClick={() => filterProductsByType("food")}>
            <img src="src/assets/Categories/dogFood.png" className="w-[75px] hover:w-[90px]" />
            <div className="text-lg font-normal py-2">Food</div>
          </Link>
          <Link to="/dog-products/bedding" className="w-[120px] flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105" onClick={() => filterProductsByType("bed")}>
            <img src="src/assets/Categories/bats.png" className="w-[75px] hover:w-[90px]" />
            <div className="text-lg font-normal py-2 text-center">Bedding <br />& Mats</div>
          </Link>
          <Link to="/dog-products/treats" className="w-[120px] flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105" onClick={() => filterProductsByType("treat")}>
            <img src="src/assets/Categories/dogTreats.png" className="w-[75px] hover:w-[90px]" />
            <div className="text-lg font-normal py-2 text-center">Treats, Biscuits <br />& Chews</div>
          </Link>
          <Link to="/dog-products/grooming" className="w-[100px] flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:scale-105" onClick={() => filterProductsByType("grooming")}>
            <img src="src/assets/Categories/grooming.png" className="w-[75px] hover:w-[90px]" />
            <div className="text-lg font-normal py-2">Grooming</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterDog;
