import "./App.css";
import AboutMe from "./components/AboutMe";
import Greeting from "./components/Greeting";
import HardSkills from "./components/HardSkills";
import MyProjects from "./components/MyProjects";
import SoftSkills from "./components/SoftSkills";

const App = () => {
  return (
    <div className="text-violet-100 bg-gradient-to-br from-[#111010] via-[#130d1a] to-[#2c1a3f] scroll-smooth">
      <Greeting />
      <AboutMe />
      <HardSkills />
      <SoftSkills />
      <MyProjects />
    </div>
  );
};

export default App;
