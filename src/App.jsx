import React from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Plan from "./Components/Plan";

const App = () => {
  return (
    <div className="bg-[#fffff]  ">
      <Header />
      <Card />
      <Plan/>
      <Footer/>
    </div>
  );
};

export default App;
