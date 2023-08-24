import React from "react";

function Search() {
  return (
    <div className="bg-no-repeat bg-cover bg-[url('../public/search-page/background.png')] h-[915px]">
      <div className="flex pt-[20px] justify-between">
        <img src="/search-page/header-logo.png" className="h-[113px]" />
        <div className=" flex gap-x-[20px] text-white">
          <div className="">Home</div>
          <div className="">Our Story</div>
          <div className="">Resource Center</div>
        </div>
      </div>
      <div className="flex justify-center text-white text-[65px] font-bold mb-20">
        Search
      </div>
      <div className="flex justify-center">
        <div className="relative ">
          <img
            className="absolute left-2 top-3 "
            src="/search-page/search-icon.png"
          />
          <input
            className="w-[1316px] h-[50px] indent-10"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" bg-white w-[1319px] ">
          <div className="flex ml-[20px]">
            <div>
              <img src="/search-page/search-image.svg" className="" />
            </div>
            <div className="ml-10 mt-[18px]">
              <div className="font-bold">Evidence to Action for Peace</div>
              <div className="text-[#5D5E5F] mt-3">
                This panel session will spotlight the Carter School’s new
                evidence to action for peace Initiative.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center text-white">
        For example: <span>Resource Library Data </span>
      </div>
    </div>
  );
}

export default Search;
