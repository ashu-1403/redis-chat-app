import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MessageCircle, Send } from 'lucide-react';

const Page = () => {
  return (
    <div>
      <div className="flex h-screen w-full flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 flex overflow-hidden bg-pink-300 relative justify-center items-center flex-col">
         
          

          
          <Image
            src={"/default.png"}
            alt="Default"
            width={400}
            height={400}
            className="rounded-md hover:scale-105 transition-transform duration-300 mt-9"
          />
          
         
          <div className="flex gap-6 mb-48">
           
            <Button
              className="group relative inline-flex items-center justify-center bg-black text-white
                       text-lg font-medium px-8 py-4 rounded-lg overflow-hidden
                       transition-all duration-300 ease-in-out
                       hover:bg-gray-900 hover:scale-105 hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                       active:scale-95"
            >
              <span className="relative flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Login
              </span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"></span>
            </Button>

         
            <Button
              className="group relative inline-flex items-center justify-center bg-white text-black
                       text-lg font-medium px-8 py-4 rounded-lg overflow-hidden
                       border-2 border-black transition-all duration-300 ease-in-out
                       hover:bg-black hover:text-white hover:scale-105 hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                       active:scale-95"
            >
              <span className="relative flex items-center">
                <Send className="w-5 h-5 mr-2" />
                Signup
              </span>
              <span className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100
                           transition-opacity duration-300"></span>
            </Button>
          </div>
        </div>
        
        
        <div className="flex-1 bg-[#f0f4f8] dark:bg-[#121212] flex justify-center items-center p-8 md:block hidden  ">
          <Image
            src={"/2992779.jpg"}
            alt="Full Default"
            width={800}
            height={800}
            className="max-w-full h-auto rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;