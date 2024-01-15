import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero1";
import About from "./components/About";
import Timeline from "./components/Timeline1";
import SignUpForm from "./components/Form";
import Accordion from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Accordion />
      <SignUpForm />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
