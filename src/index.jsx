import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import ToppingsSelect from "./components/ToppingsSelect";
import { PrefsContext } from "./context/context";
import "./style.css";

const toppings = [
  {
    name: "Pepperoni",
    price: 1,
    vegan: false,
    selected: false,
  },
  {
    name: "Mushroom",
    price: 0.35,
    vegan: true,
    selected: false,
  },
  {
    name: "Extra cheese",
    price: 0.5,
    vegan: false,
    selected: false,
  },
  {
    name: "Sausage",
    price: 0.8,
    vegan: false,
    selected: false,
  },
  {
    name: "Onion",
    price: 0.25,
    vegan: true,
    selected: false,
  },
  {
    name: "Black olives",
    price: 0.65,
    vegan: true,
    selected: false,
  },
  {
    name: "Green pepper",
    price: 0.55,
    vegan: true,
    selected: false,
  },
  {
    name: "Fresh garlic",
    price: 0.1,
    vegan: true,
    selected: false,
  },
  {
    name: "Tomato",
    price: 0.5,
    vegan: true,
    selected: false,
  },
  {
    name: "Fresh basil",
    price: 0.15,
    vegan: true,
    selected: false,
  },
  {
    name: "Pineapple",
    price: 0.7,
    vegan: true,
    selected: false,
  },
  {
    name: "Prosciutto",
    price: 1.2,
    vegan: false,
    selected: false,
  },
];

const App = () => {
  const [veganOnly, setVeganOnly] = useState(true);

  const handleVeganOnly = () => {
    toppings.forEach(item => {
      if(item.vegan !== true) {
        setVeganOnly(!veganOnly)
      }
      return veganOnly
    })
  }

  return (
    <PrefsContext.Provider value={{ toppings, veganOnly }}>
      <div className="container">
        <header>
          <Header onVegan={handleVeganOnly} />
        </header>
        <main>
          <ToppingsSelect />
        </main>
      </div>
    </PrefsContext.Provider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
