import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";
import { usePrefs } from "../../context/context";

const ToppingsSelect = () => {
  const { toppings } = usePrefs();
  const [pizzaToppings, setPizzaToppings] = useState(toppings);
  const [chosenItem, setChosenItem] = useState(false);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleToppingChange = (index, chosenItem) => {
    const newToppings = [...pizzaToppings];
    newToppings[index].selected = chosenItem;
    setPizzaToppings(newToppings);
    setChosenItem(chosenItem);
    
    totalPrice(newToppings);
  };

  const totalPrice = (chosenToppings) => {
    let price = 0;
    let amount = 0;
    chosenToppings.forEach(item => {
      if(item.selected === true) {
        price += item.price;
        amount += 1;
      }
        setPrice(price.toFixed(2));
        setAmount(amount);
    });
  };

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {amount}, total price: {price} Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={index}
            onSelectChange={(chosenItem) => handleToppingChange(index, chosenItem)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
