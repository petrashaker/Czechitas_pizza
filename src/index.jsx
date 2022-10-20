import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import ToppingsSelect from "./components/ToppingsSelect";
import PrefsContextProvider from "./context/context";
import "./style.css";

const App = () => {


  return (
    <PrefsContextProvider>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <ToppingsSelect />
        </main>
      </div>
    </PrefsContextProvider>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
