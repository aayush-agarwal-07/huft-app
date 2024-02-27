import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { dogProducts } from "../../api/dogs";

export function NavigationFeatured() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Featured");

  const handleButtonClick = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Close the menu after selecting an item
  };

  return (
    <div className="bg-orange-200 w-full border h-20">
      <div className="flex justify-between gap-6 items-center mx-[100px] py-[30px]">
        <div className="text-xl font-normal text-gray-800">
          Show Filter | {dogProducts.length} Products{" "}
        </div>
        <div className="flex justify-end items-center gap-2">
          <div className="text-xl font-normal text-gray-800">Sort by:</div>
          <div className="Relative flex text-xl font-normal text-gray-800 gap-2 cursor-pointer">
            <button
              className="text-gray-700 hover:text-gray-900"
              onClick={handleButtonClick}
            >
              {selectedItem}
            </button>
            <div className="pt-1 text-gray-700">
              <IoIosArrowDown />
            </div>
            {isOpen && (
              <div className="absolute right-3 mt-8 bg-white shadow p-4 rounded-md">
                <ul>
                  <li onClick={() => handleItemClick("Featured")}>Featured</li>
                  <li onClick={() => handleItemClick("Best Selling")}>
                    Best Selling
                  </li>
                  <li onClick={() => handleItemClick("Alphabetically, A to Z")}>
                    Alphabetically, A to Z
                  </li>
                  <li onClick={() => handleItemClick("Alphabetically, Z to A")}>
                    Alphabetically, Z to A
                  </li>
                  <li onClick={() => handleItemClick("Price, Low to High")}>
                    Price, Low to High
                  </li>
                  <li onClick={() => handleItemClick("Price, High to Low")}>
                    Price, High to Low
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
