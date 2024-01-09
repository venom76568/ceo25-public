import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Timeline from './components/Timeline1';
import SignUpForm from './components/Form';
import Accordion from './components/Faq';
// import Timeline1 from './components/Time';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About />
      <Timeline />
      {/* <Timeline1/> */}
      <Accordion/>
      <SignUpForm/>
    </div>
  );
}

export default App;
