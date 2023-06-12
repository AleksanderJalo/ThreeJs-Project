import React, { useState } from "react";
import KeyboardScreen from "../components/KeyboardScreen";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      {
        <div className="flex flex-col bg-[#DFD0BB] min-w-screen min-h-screen max-w-screen max-h-screen">
          <Navbar />
          <div className="flex grow min-w-full justify-center gap-22">
            <div className="flex flex-col grow m-10 gap-10 w-1/2 ">
              <div className="bg-[#474344] rounded-xl text-white w-full h-1/2 flex flex-col font-nasa">
                <div className="text-[#e5bd77] text-8xl px-6 pt-2">Custom</div>
                <div className="text-[#DFD0BB] text-8xl px-6">Keyboards</div>
                <div className="text-[#DFD0BB] text-2xl px-6 text-justify mt-8 pb-10 font-nasa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris elit ante, dapibus non nisl at, varius interdum risus.
                  Nam lectus lacus, tempus sed rhoncus id, vestibulum eget ex.
                  Etiam viverra.
                </div>
              </div>
              <div className="h-1/2 flex justify-between">
                <div className="border-[#474344] border-8 font-nasa text-[#943d2c] w-1/2 rounded-xl flex-col flex px-2 py-2 text-3xl justify-between">
                  <div>LOW-PROFILE</div>
                  <div>ERGONOMICS </div>
                  <div>HIGH-PERFORMANCE</div>
                  <div>WIRELESS</div>
                </div>
                <div className="flex flex-col justify-between w-full gap-5 ml-4 border-[#474344] border-8 rounded-xl">
                  <div className="bg-[#E5BD77] w-full h-1/4  border-b-8 border-[#474344] text-[#474344] text-4xl text-bold font-nasa flex items-center justify-center">
                    Create What You Like
                  </div>
                  <div className=" rounded-xl  grow">
                    ddd
                  </div>
                </div>
              </div>
            </div>
            <div className="grow m-10 rounded-xl w-1/2 flex flex-col gap-8">
              <div className="h-3/4">
                <KeyboardScreen />
              </div>
              <div className="bg-[#E5BD77] h-1/4 rounded-xl">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default HomePage;
