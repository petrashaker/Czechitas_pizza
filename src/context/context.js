import React, { createContext, useContext } from "react";

export const PizzaContext = createContext();

//custom hook
export const usePizza = () => useContext(PizzaContext);