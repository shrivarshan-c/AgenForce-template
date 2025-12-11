"use client";
import { useTheme } from "next-themes"
import React, { useEffect, useState } from "react";
import { SunIcon,MoonIcon } from "lucide-react";

export const ModeToggle = ()=>{
const {theme, setTheme} = useTheme();

const [systemTheme,setSystemTheme] = useState<'light'|'dark'|'system'>("light");

useEffect(()=>{

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
        if (e.matches) {
            setSystemTheme("dark");
        } else {
            setSystemTheme("light");
        }
    };

    mediaQuery.addEventListener('change', handleChange);


    return () => {
        mediaQuery.removeEventListener('change', handleChange);
    };


})
const case_switch = ()=>{
    switch (theme) {
        case "light":
         setTheme("dark")
        return;
        case "dark":
            setTheme("light")
            return;

        case "system":
            if(systemTheme === "dark"){
                setTheme("light")
                return;
            }else{
                setTheme("dark")
                return;
            }
        default:
            break;
    }
}

    return(
        <>
        <div className="relative">
<button onClick={case_switch} className="absolute top-0 right-0 flex items-center justify-center border-2">
<SunIcon className  = " absolute size-6 scale-0 dark:scale-100"/>
<MoonIcon  className = " absolute size-6 scale-100 dark:scale-0"/>
</button>
</div>


        </>
    )
}
