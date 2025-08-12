import "./App.css";
import AboutMe from "./components/AboutMe";
import Greeting from "./components/Greeting";
import HardSkills from "./components/HardSkills";
import SoftSkills from "./components/SoftSkills";

const App = () => {
  return (
    <div className="text-violet-100 bg-gradient-to-br from-[#111010] via-[#130d1a] to-[#2c1a3f]">
      <Greeting />
      <AboutMe />
      <HardSkills />
      <SoftSkills />
    </div>
  );
};

export default App;
