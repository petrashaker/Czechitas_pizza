import React, { createContext, useContext } from "react";

export const PrefsContext = createContext();

//custom hook
export const usePrefs = () => useContext(PrefsContext);