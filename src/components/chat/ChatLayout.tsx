"use client";

import React, { use, useEffect } from "react";
import { useState } from "react";
import { ResizablePanelGroup } from "../ui/resizable";
import { ResizablePanel } from "../ui/resizable";
import { ResizableHandle } from "../ui/resizable";
import Sidebar from "@/components/Sidebar";


interface chatLayoutProps {
  defaultLayout: number[] | undefined;
}

const ChatLayout = ({ defaultLayout = [320, 480] }: chatLayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-full items-stretch bg-background rounded-lg"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={8}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collased=true`;
        }}
        onExpand={() => {
            setIsCollapsed(false);
            document.cookie = `react-resizable-panels:collased=false`;
        }   
    }
      >
        <Sidebar isCollapsed = {isCollapsed}/>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <div className="flex justify-center items-center h-full w-full px-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <img src="./hello.png" alt="" className="w-full md:w-2/3 lg:w-1/2" />
                <p className="text-muted-foreground text-center"> click on the chat to view the message</p>

            </div>

        </div>

      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatLayout;
