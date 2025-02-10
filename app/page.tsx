import Image from "next/image";
import { BackgroundLines } from "./components/ui/background-lines";
import { MenuItem } from "./components/ui/navbar-menu";
import NavBar  from "./components/NavBar";
import HeroContent from "./components/HeroContent";
import Overview from './components/Overview'
import AnimatedModalDemo from "./components/animated-modal-demo";
import Projects from "./components/Projects";
import Testimonials from "./components/testimonials";

const items = ["Home", "About", "Services"]

export default function Home() {
  return (
   <div>
   <NavBar/>
   <HeroContent/>
   <Overview/>
   <Projects/>
   <Testimonials/>
    <BackgroundLines/>
    
   </div>
  );
}
