import React from "react"

import { cn } from "@/lib/utils"

export const FirstSkeleton = ({children,className}:{children:React.ReactNode,className?:string})=>{


    return(
        <div className={cn("border rounded-2xl border-neutral-300 bg-white  p-4 flex flex-col gap-2 items-center h-44 shadow-2xl",className)}>

        {children}
        </div>
    )
}




export const SkeletonTitle = ({icon,title,badge}:{
    icon?:React.ReactNode,
    title?:string,
    badge?:React.ReactNode
})=>{


    return(
        <div className="CardName flex items-center justify-center gap-4">
        {icon}
        {title}
        {badge}

        </div>
    )
}


export const Badge = ({ variants = "success",
    logo1,
    logo2,
    text
  }: {
    variants?: "success" | "pending" | "failed";
    logo1: React.ReactNode;
    logo2: React.ReactNode;
    text: string;


  })=>{


    
    const variantStyle = {
        success: "bg-green-100 border-2 border-green-200 text-green-800",
        pending: "bg-yellow-100 border-green-200 text-yellow-800",
        failed: "bg-red-100 border-2 border-red-200  text-red-800",
      };
    return(
        <div className={`w-21 h-8 rounded-2xl flex items-center justify-center text-xs px-2 py-0.5 ${variantStyle[variants]}`}>


           {logo1}
           {logo2}
           {text}


        </div>
    )
}



export const SkeletonPara = (
    {children}:{
        children:React.ReactNode
    }
)=>{

    return(
      <p className="text-neutral-500 px-2 text-sm font-manrope">
        {children}
      </p>
    )
}





export const Tags = ()=>{


    return(
        <div className="flex gap-2">

            <p className="bg-neutral-300 rounded-sm  font-manrope p-1 text-sm font-medium ">Google ads</p>
            <p className="bg-neutral-300 rounded-sm font-manrope p-1  text-sm font-medium ">Saas</p>
            <p className="bg-neutral-300 rounded-sm font-manrope p-1  text-sm font-medium">Content</p>

        </div>
    )
}