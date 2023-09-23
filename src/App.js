import "./App.css";
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Hero from "./Screens/Hero";
import Project from "./Screens/Project";
import Skills from "./Screens/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-800">
        <Hero />
        <Skills />
        <Project />
        <About />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
