import { CardIcon, CardSection, CardStack, CardTitle } from "./Card"
import { Heading } from "./Heading"
import { FirstSkeleton, SkeletonPara, SkeletonTitle } from "./skeleton/first";
import { SubHeading } from "./subHeading"
import {IconPlus,IconCircleDashedCheck,IconClock,IconRipple} from "@tabler/icons-react";
import { Tags } from "./skeleton/first";

import { Badge } from "./skeleton/first";
import { ThirdSkeleton } from "./skeleton/Third";
import { SecondSkeleton } from "./skeleton/Second";
export const Features = ()=>{

    return(
        <div className="min-h-screen pt-10 md:pt-20 lg:pt-32 mx-auto max-w-7xl">

<div className="flex justify-between items-baseline-last">



<Heading as="h2" className="max-w-2xl font-bold">Built for Fast Moving<br></br>
Teams That Need Control.</Heading>
<SubHeading as="p" className="font-medium tracking-tight max-w-lg"> Agents work inside your existing tools, with built-in approvals,<br></br>
 brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.</SubHeading>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-24">


        
        <CardSection className="relative rounded-tl-4xl rounded-bl-4xl ">
           
            <CardStack >
                <div className="relative w-full h-40 md:h-60 lg:h-80 perspective-distant translate-x-3 -translate-y-2 -translate-z-10 "
                style={{
                    transform:"rotateZ(22deg) rotateX(30deg) rotateY(-20deg) scale(1.2)"
                }}>


                <FirstSkeleton className="absolute  bottom-20 left-2 w-[325px]" >
       <SkeletonTitle
       
       icon={<IconCircleDashedCheck/>}
       title="Risk Analysis"
       badge={<Badge variants="pending" logo1={<IconClock size={16}/>} logo2={<IconRipple size={16}/>} text="40s"/>}

       />

<SkeletonPara>
                Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.
                </SkeletonPara>

                <Tags/>

                </FirstSkeleton>
                <FirstSkeleton className="absolute bottom-10 left-4 w-[340px]">
       <SkeletonTitle
       
       icon={<IconCircleDashedCheck/>}
       title="Issue Tracker"
       badge={<Badge variants="success" logo1={<IconClock size={16}/>} logo2={<IconRipple size={16}/>} text="10s"/>}

       />

<SkeletonPara>
                Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.
                </SkeletonPara>

                <Tags/>

                </FirstSkeleton>
                <FirstSkeleton className=" absolute bottom-0 left-8 w-[345px]">
       <SkeletonTitle
       
       icon={<IconCircleDashedCheck/>}
       title="Campaign Planner"
       badge={<Badge variants="failed" logo1={<IconClock size={16}/>} logo2={<IconRipple size={16}/>} text="120s"/>}

       />

<SkeletonPara>
                Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.
                </SkeletonPara>

                <Tags/>

                </FirstSkeleton>

</div>


            </CardStack>

<div className="flex justify-between items-center p-4">


            <CardTitle>
            Prebuilt Agents, Tuned <br></br> to Your Workflows

            </CardTitle>

            <CardIcon>

            <IconPlus/>
            </CardIcon>

            </div>
        </CardSection>

             
        <CardSection>
        <CardStack className="relative">
            <SecondSkeleton/>
        </CardStack>

        <div className="flex items-center justify-between px-4 pb-2">


            <CardTitle>
            Automate Handoffs,<br></br> Reduce Ops Friction

            </CardTitle>

            <CardIcon>
        <IconPlus/>
            </CardIcon>
            </div>
        </CardSection>
             
        <CardSection className="rounded-tr-4xl rounded-br-4xl">
        <CardStack>
            <ThirdSkeleton/>

        </CardStack>

        <div className="flex justify-between items-center px-4 pb-2">

            <CardTitle>
             Approvals, Guardrails,<br></br> and Full Auditability

            </CardTitle>

            <CardIcon>
                
            <IconPlus/>

            </CardIcon>
            </div>
        </CardSection>
        
        
        </div>
        
        </div>
    )
}