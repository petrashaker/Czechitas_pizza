import React, { useState } from "react";
import { usePrefs } from "../../context/context";
import './style.css';

const Header = ({onVegan}) => {
    const {veganOnly} = usePrefs();

    const [isVegan, setIsVegan] = useState(false);
  const onVeganChange = () => {
    onVegan()
  }  
  return (
    <>
      <div className="pizza" />
      <h1>Build your own pizza</h1>
      <button onClick={() => onVegan()}>Vegan Only</button>
    </>
  );
};

export default Header;
