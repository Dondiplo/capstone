import About from "./components/About"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import HighLights from "./components/HighLights"
import Navbar from "./components/NavBar"
import Testimonials from "./components/Testimonials"
import './App.css';

function App() {
  return (
   <div className="container">
   <Navbar/>
   <HeroSection/>
   <HighLights/>
   <Testimonials/>
   <About/>
   <Footer/>
   </div>
  );
}

export default App;
