import "./App.css";
import AboutMe from "./components/AboutMe";
import Greeting from "./components/Greeting";
import HardSkills from "./components/HardSkills";

const App = () => {
  return (
    <div className="text-violet-100 bg-gradient-to-br from-[#111010] via-[#130d1a] to-[#2c1a3f]">
      <Greeting />
      <AboutMe />
      <HardSkills />
    </div>
  );
};

export default App;
