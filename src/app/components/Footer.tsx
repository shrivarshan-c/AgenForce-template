import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconSend, IconShare } from "@tabler/icons-react"




export const Footer = ()=>{

    return(
        <div className="border-t p-4">

<div className="relative pt-20 max-w-sm sm:max-w-lg md:max-w-5xl lg:max-w-7xl mx-auto h-132 ">
    
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
<div className="grid1 col-span-2 w-full h-84  flex flex-col items-center">
    
    <div className="relative w-full  h-full   flex flex-col gap-4 items-start justify-between  p-4">
   <div className=" flex flex-col items-start gap-4">
   <Logo/>
<p className="font-inter text-xl text-neutral-600">Safe, observable, outcome-driven AI</p>
<Button className="shadow-brand-lg">Start a 30 days Free Trail</Button>

   </div>

<div className="text-neutral-400 text-sm font-inter">© 2025 Agenforce AI. All rights reserved.</div> 

    </div>



    
    </div>

    <div className="grid2 col-span-1 w-full h-84 flex flex-col gap-2 p-4 ">
   <div>
   <p className="text-neutral-400  font-inter">Product</p>
   </div>
  
   <ul className="list-none gap-2 flex flex-col mt-4 text-black text-sm font-inter">
  <li className="text-sm font-inter">Agent Simulator </li> 
     <li className="text-sm font-inter">AI Workflows </li>
     <li className="text-sm font-inter">Agent Builder </li>
      <li className="text-sm font-inter">   Analytics Dashboard </li>
        <li className="text-sm font-inter">  API Integration </li>
      <li className="text-sm font-inter">   Enterprise Solutions </li>


  
   </ul>
    </div>
    <div className="grid2 col-span-1 w-full h-84 flex flex-col   gap-2 p-4 ">
   <div>
   <p className="text-neutral-400  font-inter">Company</p>
   </div>
  
   <ul className="list-none gap-2  flex flex-col mt-4 text-black text-sm font-inter">
  <li className="text-sm font-inter">About us </li> 
     <li className="text-sm font-inter">Carrer </li>
     <li className="text-sm font-inter">Press </li>
      <li className="text-sm font-inter">  Contact</li>
        <li className="text-sm font-inter">  Blog </li>
     


  
   </ul>
    </div>
    <div className="grid2 col-span-1 w-full  h-84 flex flex-col gap-2 p-4 ">
   <div className="flex flex-col justify-between w-full h-full items-start">

   <div className="flex flex-col  gap-6 h-fit w-full ">
   <p className="text-neutral-400  font-inter">NewsLetter</p>
   <div className="flex items-center">
    <input placeholder="Enter your email" className="border border-neutral-300 rounded-md p-2 bg-neutral-100"/>
    <div>
    <Button className="w-fit h-10"><IconSend/></Button>    
   </div>
   </div>
   <p className=" max-w-2xl w-full text-neutral-400 tracking-normal text-sm font-inter"> Get the latest product news and behind the scenes updates.</p>
   </div>
   <div>
    <div className=" flex whitespace-nowrap justify-end  text-sm font-inter gap-6 text-neutral-300">
       <p className="text-neutral-400">Privacy Policy    </p> 
       <p className="text-neutral-400">Terms Of services</p> 

    </div>
    <div className=" relative   flex w-full gap-2 justify-end-safe mt-2">
        <IconBrandTwitter className="size-4" />
        <IconBrandInstagram className="size-4"/>
        <IconBrandLinkedin className="size-4"/>
    </div>
   </div>
   </div>
  
  
  
    </div>

        
    </div>
</div>

        </div>
    )
}