
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Hero from "./components/Hero1";
import AboutSection from "./components/About1";
import Timeline from "./components/Timeline1";
import SignUpForm from "./components/Form";
import Accordion from "./components/Faq";

function App() {
  return (
    <BrowserRouter>
      <Hero/>
      <AboutSection/>
      <Timeline/>
      <SignUpForm/>
      <Accordion/>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;