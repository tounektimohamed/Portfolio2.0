import './App.css';
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Hero from './Screens/Hero';
import Skills from './Screens/Skills';

function App() {
  return (
    <>
     <Navbar/>
     <div className='bg-white dark:bg-gray-800'>
     <Hero/>
     <Skills/>
     </div>
     <Footer/>
    </>
  );
}

export default App;
