

import Image from "next/image";
import Preference from "@/components/Preference";

import ChatLayout from "@/components/chat/ChatLayout";
import { cookies } from "next/headers";

const page = async() => {
  const layout = (await cookies()).get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  return (
    <main className="relative flex h-screen flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      {/* Background */}

      <Preference />
      <div
        className="
    absolute inset-0 z-[-2] h-screen w-screen 
    bg-pink-100 dark:bg-gray-900"
        aria-hidden="true"
      />
      <div className="z-10 border rounded-lg max-w-5xl w-full min-h-[85vh] text-sm lg:flex">
         <ChatLayout defaultLayout = {defaultLayout}/>

      </div>
    </main>
  );
};

export default page;
