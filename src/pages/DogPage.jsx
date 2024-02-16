import React from "react";
import { NavigationFeatured } from "../components/dogPage/useFeatured";

const DogPage = () => {
  return (
    <div>
      <img src="https://shorturl.at/uvLO3" />
      <div className="bg-orange-200 w-full">
        <div className="flex justify-between gap-6 items-center mx-[100px] py-[30px]">
          <div className="text-xl font-normal text-gray-800">
            Show Filter | 160 Products{" "}
          </div>
          <div className="flex justify-end items-center gap-2">
            <div className="text-xl font-normal text-gray-800">Sort by:</div>
            <div>{<NavigationFeatured />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogPage;
