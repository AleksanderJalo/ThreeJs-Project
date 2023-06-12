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
              <div className="bg-[#474344] rounded-xl text-white w-full h-1/2 flex flex-col">
                <div className="text-[#e5bd77] text-8xl px-6 pt-2">Custom</div>
                <div className="text-[#DFD0BB] text-8xl px-6">Keyboards</div>
                <div className="text-[#DFD0BB] text-2xl px-6 text-justify mt-12 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris elit ante, dapibus non nisl at, varius interdum risus.
                  Nam lectus lacus, tempus sed rhoncus id, vestibulum eget ex.
                  Etiam viverra.
                </div>
              </div>
              <div className="h-1/2 flex justify-between">
                <div className="border-[#474344] border-8  w-1/2 rounded-xl">
                  bbb
                </div>
                <div className="flex flex-col justify-between w-full gap-5 ml-4">
                  <div className="bg-[#E5BD77] w-full h-1/4 rounded-xl">
                    ccc
                  </div>
                  <div className="border-[#474344] border-8 rounded-xl  grow">
                    ddd
                  </div>
                </div>
              </div>
            </div>
            <div className="grow bg-[#474344] m-10 rounded-xl w-1/2">
              <KeyboardScreen />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default HomePage;
