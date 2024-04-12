import React from "react";

const cardData = [
  {
    id: 1,
    title: "Free",
    price: "0/mo",
    usersIncluded: "10 users included",
    storage: "2 GB of storage",
    emailSupport: "Email support",
    helpCenterAccess: "Help center access",
    btn: "Sign up for free",
  },

  {
    id: 2,
    title: "Pro",
    price: "18,695/mo",
    usersIncluded: "20 users included",
    storage: "10 GB of storage",
    emailSupport: "Priority email support",
    helpCenterAccess: "Help center access",
    btn: "Get started",
  },

  {
    id: 3,
    title: "Enterprise",
    price: "36,144/mo",
    usersIncluded: "30 users included",
    storage: "15 GB of storage",
    emailSupport: "Phone and email support",
    helpCenterAccess: "Help center access",
    btn: "Contact us",
  },
  // Add more card data here
];

const Card = () => {
  return (
    <div className=" ">
      <div className=" ">
        <h1 className="text-center text-black text-[3rem]">Pricing</h1>
        <div className=" justify-center flex items-center px-4  mt-6">
          <p className="text-[1.3rem] max-w-3xl text-[#3a3b3b] justify-center text-center  ">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 md:px-9 px-5 xl:px-48">
          {cardData.map((card) => (
            <div className=" flex justify-center flex-col bg-[#ffff]   mb-5 pb-3 border rounded-lg border-slate-600 items-center text-white ">
              <div
                className={`py-2 border-b-2 border shadow-sm font-semibold  bg-[#F8F8F8] text-black  w-full text-center ${
                  card.id == 3
                    ? " bg-[#0d6dfd] text-[#fff] rounded-md"
                    : " "
                }`}
              >
                <h1 className="text-[1.5rem] ">{card.title}</h1>
              </div>

              <p className="text-[2rem] text-black font-semibold py-3">{`\u20A6${card.price}`}</p>
              <p className="text-base text-[#242425]">{card.usersIncluded}</p>
              <p className="text-base text-[#1e1f1f] ">{card.storage}</p>
              <p className="text-base text-[#242425]">{card.emailSupport}</p>
              <p className="text-base text-[#242425] ">
                {card.helpCenterAccess}
              </p>
              <button
                className={` md:w-64 w-80 py-3 rounded-md mt-5  border ${
                  card.id == 1
                    ? "border border-blue-700 text-blue-700 hover:bg-blue-500 hover:text-white transition-all text-xl font-semibold"
                    : ""
                }  ${
                  card.id == 2
                    ? " bg-[#0D6EFD] text-white border border-[#0D6EFD] hover:bg-blue-500 hover:text-white transition-all text-xl font-semibold "
                    : ""
                }  ${
                  card.id == 3
                    ? " bg-[#0D6EFD] text-white border border-[#0D6EFD] hover:bg-blue-500 hover:text-white transition-all text-xl font-semibold"
                    : ""
                } `}
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
