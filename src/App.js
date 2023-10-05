import './App.css'
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
import AnimatedCursor from './Hooks/AnimatedCursor';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 166, 0"
        outerAlpha={0.4}
        innerScale={0.7}
        clickables={
          ['h1',
            'h2',
            'span',
            'p',
            '.link',
            'a'
          ]
        } outerScale={5}

      />
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
      <Home id='home' />
      <Skills id='skills' />
      <Project id='projects' />
      <About id='about' />
      <Contact id='contact' />
    </>
  );
}

export default App;
