"use client"

import React from "react";
import { Button } from "./ui/button";
import { SunIcon, Volume2, VolumeX } from "lucide-react";
import { MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePreferences } from "@/store/usePreferences";
import {useSound} from "use-sound";

const Preference = () => {
   const {setTheme} = useTheme();

   const {soundEnabled,setSoundEnabled} =  usePreferences()
   const [playMouseEnter] = useSound("/sounds/mouseEnter.mp3");
   const[playSoundon]  = useSound("/sounds/on.mp3");

  return (
    <div className="flex flex-wrap gap-2 px-1 md:px-2">
      <Button variant={"outline"} size={"icon"
        } onClick={() => {
            setTheme("light") 
           soundEnabled  &&  playMouseEnter()
        }
      }>
        <SunIcon className="size-[1.2rem] text-muted-foreground" />
      </Button>
      <Button variant={"outline"} size={"icon"}
        onClick={() => {
            setTheme("dark") 
            soundEnabled && playMouseEnter()
        }}>
        <MoonIcon className="size[1.2rem] text-muted-foreground"
        />

      </Button>
      <Button variant={"outline"} size={"icon"} onClick={() => setSoundEnabled(!soundEnabled)}>
        {soundEnabled ? (<Volume2 className="size[1.2rem] text-muted-foreground"/>):(<VolumeX className="size[1.2rem] text-muted-foreground"/>)  }
        

      </Button>

    </div>
  );
};

export default Preference;
