import React, { useState } from "react";
import { usePrefs } from "../../context/context";
import './style.css';

const Check = ({ checked, onChange, vegan }) => {
  const { veganOnly } = usePrefs;

  const handleClick = () => {
    onChange(!checked);
  };
  
  return (
    <button 
      className={vegan ? "check" : "check check--disabled"}
      onClick={handleClick}
      disabled={!vegan}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
