import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onSelectChange, checked, vegan }) => {

  return (
    <div className="topping">
      <Check 
        checked={checked} 
        onChange={onSelectChange} 
        vegan={vegan}
      />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
