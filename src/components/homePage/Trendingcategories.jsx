import React from "react";

const Trendingcategories = () => {
  return (
    <div className="mx-8">
      <div className="text-2xl my-8 font-semibold">🔥️ Trending Categories</div>
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-center">
          <img src="src/assets/Categories/dogFood.png" className="w-[200px]" />
          <div className="text-xl font-semibold py-2">Dog Food</div>
        </div>
        <div className="flex flex-col items-center">
          <img src="src/assets/Categories/dogFood.png" className="w-[200px]" />
          <div className="text-xl font-semibold py-2">Dog Food</div>
        </div>
      </div>

      <img className="my-7" src="https://headsupfortails.com/cdn/shop/files/treats_strip_web_456fc1f7-9d99-4d29-a50f-4489a7a27aaa.png?v=1694610728" />
      <img className="my-7" src="https://headsupfortails.com/cdn/shop/files/loyalty_web.webp?v=1707224187" />
    </div>
  );
};

export default Trendingcategories;
