
import { Heading } from "./Heading";
import { SubHeading } from "./subHeading";
import { LandingPage } from "./LandingPageImage";


export const SecondHero = ()=>{


    return(
        <div>
              <div className="hero  mx-auto max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-7xl pt-10 md:pt-20 lg:pt-32 ">
        <Heading className="font-bold" as="h1">
        Built for Speed<br></br>
        Designed for Scale
        </Heading>

        <SubHeading className="py-8 px-2 lg:text-[19px] tracking-normal font-medium">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>

<LandingPage/>



        
      </div>


        </div>
    )
}