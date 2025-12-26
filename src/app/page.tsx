
import { Faq } from "./components/Faq";
import { Features } from "./components/features";
import { Hero } from "./components/Hero";
import { LogoBar } from "./components/LogoBar";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { SecondFeatures } from "./components/SecondFeatures";
import { SecondHero } from "./components/SecondHero";
import { ThirdFeatures } from "./components/ThirdFeatures";
import { ThirdHero } from "./components/ThirdHero";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
  <div className="h-screen w-full">
<Navbar/>
<Hero/>
<LogoBar/>
<Features/>
<SecondHero/>
<SecondFeatures/>
<ThirdHero/>
<ThirdFeatures/>
<Pricing/>
<Faq/>
<Footer/>


  

  </div>
  );
}
