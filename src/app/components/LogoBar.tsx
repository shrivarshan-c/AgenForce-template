

import Image from "next/image"

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
        <div className="min-h-screen pt-10 max-w-7xl mx-auto">

            <div className="mx-auto max-w-xl text-center text-xl text-neutral-700">
            Trusted by modern operators across industries.
            <br></br>
            <span className="text-neutral-400">From pilot to scale without chaos.
            </span>

            </div>


            <div className="logogrid  pt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-3xl mx-auto">
                    {Logos.map((logo,index)=>(
                        <div className="logo-wrapper size-20 mx-auto" key={index}>
                            <Image src={logo.url} alt={logo.name} className="logo"
                            width={100}
                            height={100} />
                        </div>
                    ))}
                </div>
            </div>
        </div>


        
        
        </>
    )
}