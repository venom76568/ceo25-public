<<<<<<< HEAD
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
=======
import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline1";
// import Timeline1 from './components/Time';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Timeline />
      {/* <Timeline1/> */}
    </div>
>>>>>>> 6107dae01eae3ae86a6eb050d0eb8b91414b64c2
  );
};

export default App;