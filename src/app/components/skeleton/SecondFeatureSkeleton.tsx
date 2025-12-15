import { cn } from "@/lib/utils"
import { LogoSvg } from "../Logo"


export const SecondFeatureSkeleton = ()=>{

    return(
        <div>
            <Circle className="flex items-center justify-center size-40 border border-neutral-300">
              <LogoSvg/>
            
            </Circle>
            <Circle className="size-60 z-8 bg-neutral-100/40 border">
         
             </Circle>
             <Circle className="size-80 z-6 bg-neutral-100/50 border">
             
             </Circle>
        
             <Circle className="size-100 z-6 bg-neutral-100/20 border">
             
             </Circle>

             <Slack/>
            <Insta/>
            <Meta/>
            <IconCard/>
        
           
           
          


            </div>
    )
}



export const Circle = ({children,className}:{children?:React.ReactNode,className?:string})=>{

  return(
    <div className={cn("w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-neutral-100 z-10 shadow-md",className)}>
        {children}
    </div>
  )
}



export const Slack = ()=>{

    return(
        <div className="size-10 flex absolute inset-0 m-auto items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:10s] bg-white dark:bg-neutral-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-slack size-8"><path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6"></path><path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6"></path><path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6"></path><path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6"></path></svg></div>
    )
}


export const Insta = ()=>{

    return(
        <div className="size-10 flex absolute inset-0 m-auto items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--initial-position:140deg] [--translate-position:180px] [--orbit-duration:15s] bg-white dark:bg-neutral-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-instagram size-8 text-red-500"><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg></div>
    )
}


export const Meta = ()=>{

    return(

        <div className="size-10 flex absolute inset-0 m-auto items-center justify-center border border-transparent shadow-black/10 ring-1 ring-black/10 rounded-sm animate-orbit [--initial-position:80deg] [--translate-position:160px] [--orbit-duration:20s] bg-white dark:bg-neutral-800"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-brand-meta size-8 text-blue-500"><path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"></path><path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"></path></svg></div>


    )
}


export const IconCard = ()=>{

    return(
        <div className="flex absolute inset-0 m-auto items-center justify-center animate-orbit [--initial-position:60deg] [--translate-position:210px] [--orbit-duration:20s] size-auto">
            <div className="h-fit w-full max-w-[200px] p-3 rounded-2xl border border-neutral-200 shadow-2xl bg-white">
                <div className="flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
                        <path d="M8.56 3.69a9 9 0 0 0 -2.92 1.95"></path>
                        <path d="M3.69 8.56a9 9 0 0 0 -.69 3.44"></path>
                        <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                        <path d="M8.56 20.31a9 9 0 0 0 3.44 .69"></path>
                        <path d="M15.44 20.31a9 9 0 0 0 2.92 -1.95"></path>
                        <path d="M20.31 15.44a9 9 0 0 0 .69 -3.44"></path>
                        <path d="M20.31 8.56a9 9 0 0 0 -1.95 -2.92"></path>
                        <path d="M15.44 3.69a9 9 0 0 0 -3.44 -.69"></path>
                        <path d="M9 12l2 2l4 -4"></path>
                    </svg>
                    <p className="text-xs font-normal text-black">Ready made solutions</p>
                </div>
            </div>
        </div>
    )
}




