import React from "react";

const features = [
  "Cool stuff",
  "Random feature",
  "Team feature",
  "Stuff for developers",
  "Another one",
  "Last time",
];

const resources = [
  "Resource",
  "Resource name",
  "Another resource",
  "Final resource",
];

const about = ["About", "Team", "Locations", "Privacy", "Terms"];

const Footer = () => {
  return (
    <div className=" py-7 md:px-40 flex flex-wrap px-5 space-y-6 md:space-y-0  md:space-x-11 md:justify-evenly mt-8 text-black   ">
      {/* <ul>
        <li className="text-sm text-[#AEB2B6]">
          <a href=""></a> 2017-2024{" "}
        </li>
      </ul> */}
      <div className="flex justify-between space-x-40 md:space-x-40">
        <ul>
          <h6 className="text-xl font-bold py-2">Features</h6>
          {features.map((feature, index) => (
            <li key={index} className="space-y-6 text-base text-black ">
              <a href="#">{feature}</a>
            </li>
          ))}
        </ul>

        <ul>
          <h6 className="text-xl font-bold py-2">Resources</h6>
          {resources.map((resource, index) => (
            <li key={index} className="space-y-6 text-base text-black">
              <a href="#">{resource}</a>
            </li>
          ))}
        </ul>
      </div>

      <ul>
        <h6 className="text-xl font-bold ">About</h6>
        {about.map((item, index) => (
          <li key={index} className="space-y-6 text-base text-black">
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
