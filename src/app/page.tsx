
import { Features } from "./components/features";
import { Hero } from "./components/Hero";
import { LogoBar } from "./components/LogoBar";
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
  <div className="h-screen w-full">
<Navbar/>
<Hero/>


<LogoBar/>
<Features/>



  </div>
  );
}
