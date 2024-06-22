import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

const FoodApp = () => {
  return (
    <div className="food-app">
      <Header />
      <div className="heyy">
        <Body />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FoodApp />);
