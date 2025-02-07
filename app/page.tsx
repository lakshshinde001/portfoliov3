import Image from "next/image";
import { BackgroundLines } from "./components/ui/background-lines";
import { MenuItem } from "./components/ui/navbar-menu";
import NavBar  from "./components/NavBar";
import HeroContent from "./components/HeroContent";

const items = ["Home", "About", "Services"]

export default function Home() {
  return (
   <div>
   <NavBar/>
   <HeroContent/>
    <BackgroundLines/>
   </div>
  );
}
