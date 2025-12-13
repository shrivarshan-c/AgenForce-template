
"use client";
import Image from "next/image"
import{ motion} from "motion/react";

const Logos = [

    {
        name:"openai",
        url:"https://assets.aceternity.com/logos/openai.png"
    },
    
    {
        name:"hello-patient",
        url:"https://assets.aceternity.com/logos/hello-patient.png"
    },

    {
        name:"granola",
        url:"https://assets.aceternity.com/logos/granola.png",


    },
    {
        name:"character-ai",
        url:"https://assets.aceternity.com/logos/characterai.png",

    },
    {
        name:"oracle",
        url:"https://assets.aceternity.com/logos/oracle.png",


    },

    {
        name:"Portola",
        url:"https://assets.aceternity.com/logos/portola.png",

    },
  
]

export const LogoBar = ()=>{


    return(
        <>
        <div className="pt-10 md:pt-20 lg:pt-32 max-w-7xl mx-auto">

            <div className="mx-auto max-w-xl text-center text-xl text-neutral-700">
            Trusted by modern operators across industries.
            <br></br>
            <span className="text-neutral-400">From pilot to scale without chaos.
            </span>

            </div>


            <div className="logogrid  pt-10">
                <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-3xl mx-auto"
                
              

                >
                    {Logos.map((logo,index)=>(
                        <motion.div className="logo-wrapper size-20 mx-auto" key={index} 
                        
                        initial={{
                            y:-10,
                            opacity:0,
                            filter:"blur(10px)"
                        }}
                        whileInView={{
                            y:0,
                            opacity:1,
                            filter:"blur(0px)"
                        }}
                        transition={{
                            duration:0.7,
                            delay:index*0.1,
                            ease:"easeOut"
                        }}
                        >
                            <Image src={logo.url} alt={logo.name} className="logo"
                            width={100}
                            height={100} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>


        
        
        </>
    )
}