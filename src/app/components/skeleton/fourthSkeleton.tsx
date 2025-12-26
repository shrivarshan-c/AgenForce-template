import { useState } from "react";
import { IconBrand4chan, IconCheck, IconCompassFilled, IconFilter, IconTable } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import {motion} from "motion/react";
const CardDetails = [
  {
    icon: <IconBrand4chan size={16} />,
    title: "Brand & Style",
    description:
      "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.",
      CardStyle:" bg-blue-100 border border-blue-300 text-black"
  },
  {
    icon: <IconCompassFilled size={16} />,
    title: "Compliance & policy",
    description:
      "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
        CardStyle:" bg-green-100 border border-green-300 text-black"
  },
  {
    icon: <IconFilter size={16} />,
    title: "Content Safety Filters",
    description:
      "Ensure your AI agents follow company policies and regulatory requirements with built-in compliance controls.",
        CardStyle:" bg-violet-100 border border-violet-300 text-black"
  },
  {
    icon: <IconTable size={16} />,
    title: "Approval Triggers",
    description:
      "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
        CardStyle:" bg-neutral-100 border border-neutral-300 text-black"
  },
  {
    icon: <IconCheck size={16} />,
    title: "Output Quality Checks",
    description:
      "Automatically trigger approvals based on predefined criteria, ensuring timely review and compliance.",
        CardStyle:" bg-pink-100 border border-pink-300 text-black"
  },
];

export const FourthSkeleton = ({ className,cardStyle }: { className?: string
  ,cardStyle?:string
 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = CardDetails[activeIndex];

  return (
    <div className="flex flex-col h-full w-full gap-4">
  
      <div className="grid grid-cols-3 gap-2 p-4 max-w-2xl mx-auto">
        {CardDetails.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "flex items-center gap-2 h-8 px-2 rounded-md border text-xs font-manrope transition",
              activeIndex === index
                ? "bg-white text-black border-black"
                :  item.CardStyle
         
            )}
          >
            {item.icon}
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* -------- DESCRIPTION PANEL -------- */}
      <div className="mx-auto max-w-md bg-neutral-100 p-4 rounded-2xl h-80 w-full">
        <FourthFeatureAgentComponent>
          <div className="p-2">
            <motion.div key={activeIndex} className="flex items-center gap-3"
            initial={{opacity:0,filter:"blur(20px)",y:10}}
            whileInView={{opacity:1,filter:"blur(0px)",y:0}}
            transition={{duration:0.4,ease:"easeOut"}}>
              <IconBrand4chan />
              <h3 className="text-lg font-inter font-semibold">
                {activeItem.title}
              </h3>
            </motion.div>

            <motion.div key={activeItem.title} className="mt-1 text-sm text-neutral-500"
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.4, delay:0.2,ease:"easeOut"}}>
       
              Tone Guidance
            </motion.div>

            <motion.div key={activeItem.description}  className="text-sm text-neutral-600 p-3 border shadow-xs rounded-md mt-3 bg-white"
            initial={{opacity:0,y:10}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.4, delay:0.5,ease:"easeOut"}}
            >
              {activeItem.description}
            </motion.div>

            <div 
            className="flex gap-2 mt-4">
              



<SecondFeatureAgentComponentCard >

 
<SalesForce/>
 <p className="text-xs text-neutral-600">salesforce</p>

</SecondFeatureAgentComponentCard>
<SecondFeatureAgentComponentCard>
<Hubspot/>
 <p className="text-xs text-neutral-600">Hubspot</p>
</SecondFeatureAgentComponentCard>
<SecondFeatureAgentComponentCard>
<Excel/>
 <p className="text-xs text-neutral-600">Sheets</p>
</SecondFeatureAgentComponentCard>



 </div>
          </div>
          
        </FourthFeatureAgentComponent>
      </div>
    </div>
  );
};



export const FourthFeatureAgentComponent = ({children}:{children:React.ReactNode})=>{

    return(
      <div>
  
        <div className=" relative w-full h-54 flex border border-neutral-300 bg-white rounded-xl p-2 items-baseline gap-4">
  
          {children}
  
        </div>
      </div>
    )
  }
  


  export const SecondFeatureAgentComponentCard = ({children}:{children:React.ReactNode})=>{
    return(
      <div className="flex px-1 py-0.5 gap-0.5 items-center font-manrope border border-neutral-300  rounded-sm">
  {children}
  
        </div>
    )
  }



export const SalesForce = ()=>{
    return(
      <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.94348 1.08897C6.40431 0.609254 7.04568 0.312185 7.75424 0.312185C8.69899 0.312185 9.51776 0.837042 9.95864 1.61908C10.35 1.44413 10.7739 1.35381 11.2026 1.35403C12.9031 1.35403 14.2835 2.7449 14.2835 4.46118C14.2835 6.17746 12.9031 7.56834 11.2026 7.56834C10.9947 7.56834 10.7921 7.54745 10.5937 7.50798C10.2079 8.19554 9.47052 8.66266 8.63075 8.66266C8.28885 8.66334 7.95133 8.58578 7.64402 8.43593C7.253 9.35443 6.34238 10 5.28216 10C4.17471 10 3.23522 9.30194 2.87307 8.32046C2.71188 8.35447 2.54759 8.37157 2.38285 8.37147C1.06546 8.37147 0 7.29027 0 5.96238C0 5.07012 0.479719 4.29333 1.19143 3.87345C1.04044 3.52562 0.962718 3.15043 0.963113 2.77125C0.963113 1.23866 2.20702 0 3.73961 0C4.63711 0 5.44015 0.427759 5.94401 1.0917" fill="#00A1E0"></path></svg>
    )
  }
  
  export const Hubspot = ()=>{
  
    return(
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3"><path d="M7.61726 3.29259V2.10176C7.77462 2.02822 7.90786 1.91149 8.00146 1.76516C8.09507 1.61884 8.14519 1.44894 8.14599 1.27524V1.24789C8.14599 0.741441 7.73543 0.330879 7.22898 0.330879H7.20163C6.95842 0.330879 6.72518 0.427493 6.55321 0.599465C6.38123 0.771438 6.28462 1.00468 6.28462 1.24789V1.27524C6.28542 1.44894 6.33554 1.61884 6.42915 1.76516C6.52275 1.91149 6.65599 2.02822 6.81335 2.10176V3.29259C6.36108 3.36184 5.93513 3.54937 5.57863 3.83618L2.31271 1.29246C2.33601 1.20839 2.34816 1.12195 2.34951 1.03518C2.34991 0.830814 2.28969 0.630919 2.17647 0.46078C2.06325 0.290642 1.90212 0.157904 1.71345 0.0793569C1.52478 0.000809612 1.31705 -0.0200182 1.11654 0.0195079C0.91603 0.059034 0.731748 0.157138 0.587002 0.301412C0.442257 0.445685 0.343551 0.629645 0.303369 0.830024C0.263188 1.0304 0.283338 1.2382 0.361268 1.42712C0.439198 1.61605 0.571407 1.77762 0.741174 1.89139C0.910942 2.00517 1.11064 2.06604 1.31501 2.06631C1.4938 2.06547 1.66924 2.01774 1.82382 1.92788L5.03977 4.43041C4.75087 4.86686 4.60015 5.38022 4.60725 5.90357C4.61436 6.42692 4.77896 6.936 5.07961 7.36444L4.10149 8.3429C4.02242 8.31761 3.94004 8.30419 3.85704 8.30306C3.68929 8.30319 3.52534 8.35305 3.38591 8.44633C3.24648 8.53962 3.13784 8.67214 3.0737 8.82715C3.00957 8.98215 2.99282 9.1527 3.02558 9.31722C3.05834 9.48175 3.13914 9.63287 3.25776 9.75149C3.37638 9.87011 3.5275 9.9509 3.69202 9.98366C3.85655 10.0164 4.02709 9.99968 4.1821 9.93554C4.33711 9.87141 4.46963 9.76276 4.56291 9.62333C4.6562 9.48391 4.70605 9.31996 4.70619 9.1522C4.7051 9.0692 4.69167 8.98681 4.66635 8.90776L5.634 7.93977C5.94955 8.18269 6.31651 8.35017 6.70678 8.42937C7.09705 8.50857 7.50027 8.49739 7.88555 8.39668C8.27083 8.29597 8.62795 8.10841 8.92955 7.84837C9.23114 7.58832 9.46921 7.2627 9.62552 6.89643C9.78183 6.53016 9.85223 6.13298 9.83133 5.7353C9.81042 5.33763 9.69877 4.95001 9.50492 4.60215C9.31108 4.25429 9.04018 3.95542 8.71298 3.72843C8.38579 3.50144 8.01097 3.35235 7.61726 3.29259ZM7.21615 7.20913C7.03731 7.21405 6.85931 7.18308 6.69265 7.11804C6.52599 7.053 6.37405 6.95522 6.24582 6.83047C6.11759 6.70571 6.01567 6.55653 5.94607 6.39172C5.87647 6.22691 5.84062 6.04982 5.84062 5.87092C5.84062 5.69202 5.87647 5.51493 5.94607 5.35013C6.01567 5.18532 6.11759 5.03613 6.24582 4.91138C6.37405 4.78663 6.52599 4.68885 6.69265 4.62381C6.85931 4.55877 7.03731 4.5278 7.21615 4.53272C7.56275 4.54485 7.89113 4.69103 8.1321 4.94046C8.37307 5.1899 8.50784 5.52311 8.50801 5.86993C8.50819 6.21675 8.37375 6.55011 8.13303 6.79978C7.89231 7.04946 7.56409 7.19597 7.2175 7.20845" fill="#FF7A59"></path></svg>
    )
  }
  
  
  export const Excel = ()=>{
    return(
  
  
      <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-3">
    <mask id="mask0_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask0_6_1165)">
      <path d="M5.38222 0.147949H1.62911C1.26484 0.147949 0.966797 0.44599 0.966797 0.810263V9.19957C0.966797 9.56384 1.26484 9.86188 1.62911 9.86188H7.36916C7.73343 9.86188 8.03147 9.56384 8.03147 9.19957V2.7972L6.48608 1.69335L5.38222 0.147949Z" fill="#0F9D58"/>
    </g>
    <mask id="mask1_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask1_6_1165)">
      <path d="M2.7334 4.89478V8.09596H6.26574V4.89478H2.7334ZM4.2788 7.65441H3.17494V7.10249H4.2788V7.65441ZM4.2788 6.77133H3.17494V6.2194H4.2788V6.77133ZM4.2788 5.88825H3.17494V5.33632H4.2788V5.88825ZM5.82419 7.65441H4.72034V7.10249H5.82419V7.65441ZM5.82419 6.77133H4.72034V6.2194H5.82419V6.77133ZM5.82419 5.88825H4.72034V5.33632H5.82419V5.88825Z" fill="#F1F1F1"/>
    </g>
    <mask id="mask2_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask2_6_1165)">
      <path d="M5.57617 2.60352L8.0317 5.05849V2.79724L5.57617 2.60352Z" fill="url(#paint0_linear_6_1165)"/>
    </g>
    <mask id="mask3_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask3_6_1165)">
      <path d="M5.38281 0.14917V2.13611C5.38281 2.50204 5.6792 2.79842 6.04513 2.79842H8.03207L5.38281 0.14917Z" fill="#87CEAC"/>
    </g>
    <mask id="mask4_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask4_6_1165)">
      <path d="M1.62911 0.147949C1.26484 0.147949 0.966797 0.44599 0.966797 0.810263V0.865455C0.966797 0.501183 1.26484 0.203142 1.62911 0.203142H5.38222V0.147949H1.62911Z" fill="white" fillOpacity="0.2"/>
    </g>
    <mask id="mask5_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask5_6_1165)">
      <path d="M7.36916 9.8066H1.62911C1.26484 9.8066 0.966797 9.50856 0.966797 9.14429V9.19948C0.966797 9.56375 1.26484 9.86179 1.62911 9.86179H7.36916C7.73343 9.86179 8.03147 9.56375 8.03147 9.19948V9.14429C8.03147 9.50856 7.73343 9.8066 7.36916 9.8066Z" fill="#263238" fillOpacity="0.2"/>
    </g>
    <mask id="mask6_6_1165" maskUnits="userSpaceOnUse" x="0" y="0" width="9" height="10" style={{maskType: "luminance"}}>
      <path d="M5.3832 0.148682H1.63009C1.26581 0.148682 0.967773 0.446723 0.967773 0.810995V9.2003C0.967773 9.56457 1.26581 9.86261 1.63009 9.86261H7.37014C7.73441 9.86261 8.03245 9.56457 8.03245 9.2003V2.79794L5.3832 0.148682Z" fill="white"/>
    </mask>
    <g mask="url(#mask6_6_1165)"></g>
      </svg>
  
      )
      }
  