import React from "react";

const Header = () => {
  return (
    <div className="border-b border-slate-600 max-w-4xl py-4 justify-center mx-auto text-black ">
      <ul className="flex justify-center md:justify-between flex-wrap items-center">
        <div className="">
          <li className="text-[1.7rem] font-semibold ">Pricing example</li>
        </div>

        <div className="flex space-x-7">
          <li className="text-[1rem]">
            <a href="#">Features</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Enterprise</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Support</a>
          </li>
          <li className="text-[1rem]">
            <a href="#">Pricing</a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;
