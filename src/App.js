
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Hero from "./components/Hero1";
import AboutSection from "./components/About1";

function App() {
  return (
    <BrowserRouter>
      <Hero/>
      <AboutSection/>
    </BrowserRouter>
  );
};

export default App;