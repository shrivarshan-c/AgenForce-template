import { Button } from "@/components/ui/button";
import { Heading } from "./Heading";
import { SubHeading } from "./subHeading";
import { LandingPage } from "./LandingPageImage";
import { LogoBar } from "./LogoBar";

export const Hero = () => {
  return (
    <>
      <div className="hero  mx-auto max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-7xl pt-10 md:pt-20 lg:pt-32">
        <Heading className="font-bold" as="h1">
          Agents that do the work<br></br>Approvals that keep you safe.
        </Heading>

        <SubHeading className="py-8 px-2 lg:text-[19px] font-medium">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>

        <div className="flex items-center gap-4">
          <Button variant={"default"} className="shadow-brand-lg">
            Start Your Free Trail
          </Button>
          <Button variant={"outline"}>View Role Based Demos</Button>
        </div>


<LandingPage/>



        
      </div>

    </>
  );
};
