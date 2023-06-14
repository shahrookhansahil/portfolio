import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/SocialLinks";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
function App() {
  return (  
    <div>
        <Navbar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>  
  );
}

export default App;
