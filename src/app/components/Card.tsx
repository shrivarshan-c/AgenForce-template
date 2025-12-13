import React from "react"
import { cn } from "@/lib/utils"


export const CardSection = ({children,className}:{children:React.ReactNode,className?:string})=>{

    return(
        <div className={cn("bg-neutral-100  rounded-lg ",className)}>


{children}

    </div>
    )
}

export const CardTitle = (


    {children, className}:{children:React.ReactNode, className?:string}
)=>{

    return(
        <div className={cn("font-manrope text-2xl font-bold",className)}>
            {children}


        </div>
    )
}

export const CardIcon = (

    {className,children}:{className?:string, children:React.ReactNode}
)=>{
    return(
        <div className="size-5 md:size-10 flex items-center justify-center rounded-2xl bg-neutral-300 w-fit h-fit">
            {children}
            </div>
    )

}

export const CardStack = ({ children, className }:{children:React.ReactNode, className?:string}) => {
    return (
      <div
        className={cn(
          "relative h-40 md:h-60 lg:h-92 overflow-hidden",
          className
        )}
        style={{ perspective: "1000px" }}
      >
        {children}
  
 
      </div>
    );
  };
  