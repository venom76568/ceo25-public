import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Timeline from './components/Timeline1';
// import Timeline1 from './components/Time';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About />
      <Timeline />
      {/* <Timeline1/> */}
    </div>
  );
}

export default App;
