import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Plan = () => {
  return (
    <div className="flex justify-center flex-col mt-7 items-center">
      <h1 className="text-black text-[2.5rem] font-normal text-center ">
        Compare plans
      </h1>
      <div className="mt-5 w-full md:px-36">
        <div class="relative overflow-x-auto ">
          <table class="w-full  text-left rtl:text-right">
            <thead class="text-base border-b border-b-slate-700 text-black ">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th scope="col" class="px-6 py-3">
                  Free
                </th>
                <th scope="col" class="px-6 py-3">
                  Pro
                </th>
                <th scope="col" class="px-6 py-3">
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class=" border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold  whitespace-nowrap text-black"
                >
                  public
                </th>
                <td class="px-6 py-3">
                  <IoCheckmark className="text-xl" />
                </td>
                <td class="px-6 py-3">
                  <IoCheckmark className="text-xl" />
                </td>
                <td class="px-6 py-3">
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>

              <tr class="border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-black  whitespace-nowrap "
                >
                  Private
                </th>
                <td class="px-6 py-3"></td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>

              <tr class="border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-black whitespace-nowrap "
                >
                  Permissions
                </th>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />{" "}
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />{" "}
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>
            </tbody>

            <tbody>
              <tr class="border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-black whitespace-nowrap "
                >
                  Sharing
                </th>
                <td class="px-6 py-3">
                  {" "}
                  
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />{" "}
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>

              <tr class="border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-black whitespace-nowrap "
                >
                  Unlimited members
                </th>
                <td class="px-6 py-3">
                  {" "}
                  
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />{" "}
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>
              <tr class="border-b  border-b-slate-700  text-black  ">
                <th
                  scope="row"
                  class="px-6 py-4 font-bold text-black whitespace-nowrap "
                >
                  Extra security
                </th>
                <td class="px-6 py-3">
                  {" "}
                  
                </td>
                <td class="px-6 py-3">
                  {" "}
                  
                </td>
                <td class="px-6 py-3">
                  {" "}
                  <IoCheckmark className="text-xl" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Plan;
