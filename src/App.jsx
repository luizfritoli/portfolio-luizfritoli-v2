import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import HardSkills from "./components/HardSkills";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

const App = () => {
  return (
    <div className="text-[#000] bg-gradient-to-br 
    from-[#F5F5F5] via-[#EBE6E6] to-[#DEDCDC] scroll-smooth 
    selection:text-neutral-100 selection:bg-[#000] overflow-hidden">
      <Navbar />
      <NavbarMobile />
      <Greeting />
      <AboutMe />
      <HardSkills />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default App;
