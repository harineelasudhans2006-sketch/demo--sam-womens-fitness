import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import About from "./sections/About";
import Programs from "./sections/Programs";
import Trainers from "./sections/Trainers";
import Transformation from "./sections/Transformation";
import Results from "./sections/Results";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <QuickInfo/>
      <About/>
      <Programs/>
      <Trainers/>
      <Transformation/>
      <Results/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;

