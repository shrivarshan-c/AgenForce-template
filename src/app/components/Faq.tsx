"use client";
import { IconMinus,IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import {motion,AnimatePresence} from "motion/react";
 
export const Faq = () => {


    const FaqArray = [

        {
            question:"what is AgenForce Ai",
            ans:"AgenForce ai is a platform for building and managing Ai Agents"
        },
        {
            question:"what is AgenForce Ai build for",
            ans:"AgenForce ai is a platform for building and managing Ai Agents"
        },
        {
            question:"How Does Ai AgenForce Ai works",
            ans:"AgenForce ai is a platform for building and managing Ai Agents"
        },
        {
            question:"Is There a Free Trail  Available",
            ans:"Yes we offer a 14-day Free Trail so you can expolore all the features before committing to a plan"
        },
        {
            question:"what Kind of support Do You Provide",
            ans:"We Provide 24/7 customer support through chat ,email and comprehensive documentation to help you get the most out of AgenForce Ai"
        }
    

    ]


  return (
    <div className="relative pt-20 max-w-sm sm:max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col gap-6">
        <Svg1 />
        <p className="font-semibold font-manrope mt-8 text-6xl">
          Frequently Asked Questions
        </p>

        <div className="w-full mt-14 flex  flex-col gap-6">
{
    FaqArray.map((item,index)=>{
        return(
            <QuestionComponent question={item.question} ans={item.ans} key={index}/>
        )
    }
)
}


</div>

  
      </div>
      
    </div>
  );
};

export const Svg1 = () => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2031 46C24.2783 46 29.2031 41.0751 29.2031 35C29.2031 28.9249 24.2783 24 18.2031 24C12.128 24 7.20312 28.9249 7.20312 35C7.20312 41.0751 12.128 46 18.2031 46Z"
        fill="currentColor"
      ></path>
      <path
        d="M18.2058 50C9.97778 50 2.72178 55.248 0.149781 63.064C-0.150219 63.98 0.00578082 64.98 0.569781 65.76C1.13378 66.54 2.03778 67 2.99778 67H33.4058C34.3658 67 35.2738 66.54 35.8338 65.76C36.3938 64.98 36.5578 63.98 36.2538 63.064C33.6858 55.248 26.4338 50 18.1978 50H18.2058Z"
        fill="currentColor"
      ></path>
      <path
        opacity="0.2"
        d="M63 0H41C36.04 0 32 4.036 32 9V23C32 27.624 35.508 31.444 40 31.944V41C40 42.236 40.756 43.348 41.916 43.796C42.268 43.932 42.636 44 43 44C43.824 44 44.632 43.66 45.212 43.028L55.32 32H63C67.96 32 72 27.964 72 23V9C72 4.036 67.96 0 63 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};





export const QuestionComponent = ({
  question,
  ans,
}: {
  question?: string;
  ans?: string;
}) => {
  const [answer, setAnswer] = useState(false);

  return (
    <button
      onClick={() => setAnswer((prev) => !prev)}
      className="w-full bg-neutral-100 rounded-2xl p-6 text-left transition-all duration-200 ease-in-out"
    >
     
      <div className="flex justify-between items-center">
        <h2 className="font-semibold font-manrope text-3xl">
          {question}
        </h2>

    
        <motion.div
          animate={{ rotate: answer ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="bg-black rounded-full text-white"
        >
          {answer ? <IconMinus /> : <IconPlus />}
        </motion.div>
      </div>

     
      <AnimatePresence>
        {answer && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="mt-4 text-neutral-600 text-base leading-relaxed">
              {ans}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
