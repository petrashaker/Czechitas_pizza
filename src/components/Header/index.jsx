import React from "react";
import { usePrefs } from "../../context/context";
import "./style.css";

const Header = () => {
  const { onVegan } = usePrefs();

  return (
    <>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <button onClick={() => onVegan()}>Vegan Only</button>
    </>
  );
};

export default Header;
