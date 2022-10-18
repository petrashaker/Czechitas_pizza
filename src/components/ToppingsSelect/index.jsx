import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";
import { usePizza } from "../../context/context";

const ToppingsSelect = () => {
  const { toppings } = usePizza();
  const [pizzaToppings, setPizzaToppings] = useState(toppings);
  const [chosenItem, setChosenItem] = useState(false);

  const handleToppingChange = (index, chosenItem) => {
    const newToppings = [...pizzaToppings];
    const x = newToppings[index].selected;
    newToppings[index].selected = chosenItem;
    console.log(chosenItem)
    console.log(newToppings[index])
    setPizzaToppings(newToppings);
    setChosenItem(chosenItem);
  };

  const handleSelectChange = (index, selectedItem) => {
    const newToppings = [...pizzaToppings];
    newToppings.index = selectedItem;
    setChosenItem(selectedItem)
  }

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            checked={topping.selected}
            onSelectChange={(chosenItem) => handleToppingChange(index, chosenItem)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
