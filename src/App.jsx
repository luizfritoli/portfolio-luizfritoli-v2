import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import HardSkills from "./components/HardSkills";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import SoftSkills from "./components/SoftSkills";

const App = () => {
  return (
    <div className="text-violet-100 bg-gradient-to-br from-[#111010] via-[#130d1a] to-[#2c1a3f] scroll-smooth selection:text-neutral-700 selection:bg-violet-200">
      <Navbar />
      <NavbarMobile />
      <Greeting />
      <AboutMe />
      <HardSkills />
      <SoftSkills />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default App;
