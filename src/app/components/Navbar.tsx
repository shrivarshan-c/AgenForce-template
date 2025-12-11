"use client";
import Link from "next/link"
import { Logo } from "./Logo"
import { ModeToggle } from "./modeToggle"
import { Button } from "@/components/ui/button"
import { IconLayoutSidebarRight,IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence } from "motion/react"
import {motion} from "motion/react";


const linksData = [
    {
        name: "Features",
        href: "/features",
    },
    {
        name: "Products",
        href: "/Products",
    },
    {
        name: "Socials", 
        href: "/Socials",
    },
    {
        name: "Pricing",
        href: "/Pricing",
    },

]

export const Navbar = ()=>{

    return(
        <>
        <DesktopNavbar/>
        <MobileNavbar />





        </>
    )
}


export const MobileNavbar = ()=>{

  const [toggleMenu,setToggleMenu] = useState<boolean>(false);
  return(
    <>
         <div className="md:hidden lg:hidden relative w-full border-b py-4">
  <div className=" relative mx-auto max-w-md flex justify-between items-center  px-2">
    <Logo />
  <IconLayoutSidebarRight onClick={()=>{setToggleMenu(!toggleMenu)}}/>


  <AnimatePresence>
            {toggleMenu && (
              <motion.div
                key="mobileMenuBackdrop"
                initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
                exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 "
                onClick={() => setToggleMenu(false)} 
              >
          
                <motion.div
                  initial={{ x: 120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                
                  exit={{ x: 120, opacity: 0 }}
                  transition={{ duration: 0.5 ,
                    ease:"easeInOut"
                  }}
                  className="absolute right-0 top-0 h-full w-64 dark:bg-neutral-900 p-6 flex flex-col gap-4 shadow-xl"
                  onClick={(e) => e.stopPropagation()} 
                >
                  {linksData.map((link ,index )=> (
                    <motion.div key={link.name}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:index*0.1,duration:0.5,ease:"easeInOut"}}   >

                   
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-neutral-900 font-bold  dark:text-neutral-400 text-lg"
                    >
                      {link.name}
                    </a>
                    </motion.div>
                  ))}

                  <div className="cursor-pointer" onClick={()=>{setToggleMenu(false)}}> 
                  <IconX className="absolute top-2 right-2" />

                  </div>
                  

                </motion.div>

              </motion.div>
            )}
          </AnimatePresence>

  </div>
</div>

    </>
  )
}


export const DesktopNavbar = ()=>{
  return(
    <>
      <div className="hidden md:block relative w-full border-b py-4">
  <div className="mx-auto max-w-3xl  lg:max-w-7xl lg:px-0  flex justify-between items-center">
    <Logo />
    <div className="flex gap-4 text-neutral-500 dark:text-neutral-400" >
      {linksData.map(link => (
        <a key={link.name} href={link.href}>{link.name}</a>
      ))}
    </div>

<div className="flex items-center justify-center gap-2">

  <Link href={'/signup'} className="px-4 py-2 rounded-b-md text-neutral-600 dark:text-neutral-400 font-medium  bg-neutral-100 rounded-md">Signup</Link>
    <Button variant={'default'}>Login</Button>


    </div>

  </div>
</div>
    </>
  )
}
