import "./app.css"
import { TopBar } from "./components/TopBar";
import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";


function App() {
  return (
    <div className="min-h-screen bg-[#0f0e17]">
      <TopBar></TopBar>
      <NavBar></NavBar>
      <Hero></Hero>

    </div>
  );
}

export default App;
