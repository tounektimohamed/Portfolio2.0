import  './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
import Project from "./Screens/Project";
import SingleProject from "./Screens/SingleProject";
import Skills from "./Screens/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-white dark:bg-gray-800">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/project/:id" element={<SingleProject />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <Home id='home'/>
      <Skills id='skills'/>
      <Project id='projects'/>
      <About id='about'/>
      <Contact id='contact' />
    </>
  );
}

export default App;
