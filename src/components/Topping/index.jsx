import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onSelectChange, checked }) => {

  return (
    <div className="topping">
      <Check 
        checked={checked} 
        onChange={onSelectChange} 
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
