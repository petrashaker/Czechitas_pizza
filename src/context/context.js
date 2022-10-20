import React, { createContext, useContext, useState } from "react";
import { toppings } from "../toppings";

export const PrefsContext = createContext();

//custom hook
export const usePrefs = () => useContext(PrefsContext);

const PrefsContextProvider = ({ children }) => {
  const [veganOnly, setVeganOnly] = useState(true);

  const handleVeganOnly = () => {
    toppings.forEach((item) => {
      if (item.vegan !== true) {
        setVeganOnly(!veganOnly);
      }
      return veganOnly;
    });
  };

  const contextValue = {
    toppings: toppings,
    veganOnly: veganOnly,
    onVegan: handleVeganOnly
  }

  return (
    <PrefsContext.Provider value={contextValue}>
      {children}
    </PrefsContext.Provider>
  );
};

export default PrefsContextProvider;
