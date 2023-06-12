import React, { useState } from "react";
import KeyboardScreen from "../components/KeyboardScreen";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import KeyboardHomePageModal from "../components/KeyboardHomePageModal";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      {
        <div className="flex flex-col bg-slate-900 min-w-screen min-h-screen max-w-screen max-h-screen">
          <Navbar />
          <div className="bg-slate-600 rounded-xl flex grow m-10"> Aaaa</div>
          <div className="rounded-xl flex grow w-full justify-around items-center">
            <div className="bg-white rounded-2xl p-10"> Box </div>
            <div className="bg-white rounded-2xl p-10"> Box </div>
            <div className="bg-white rounded-2xl p-10"> Box </div>
            <div className="bg-white rounded-2xl p-10"> Box </div>
          </div>
          {/* <div className="flex grow bg-slate-900">
            <div className="bg-slate-900 basis-1/2 flex flex-col px-8 grow font-nasa">
              <div className="text-white text-xl mt-5 mb-10">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="text-amber-500 text-sm font-fixedsys mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                venenatis metus, lobortis consequat tortor. Sed quis viverra
                elit. Quisque sit amet enim sit amet dui ullamcorper pulvinar
                non vitae turpis. Sed purus dui, dictum ut diam a, fringilla
                pulvinar libero. Pellentesque feugiat mi lacus, eget vehicula
                libero facilisis ac. Curabitur pellentesque tempor hendrerit.
                Pellentesque urna dui, pretium ac lectus sed, maximus aliquet
                nibh.
              </div>
              <div className="flex justify-around text-white">
                <Button color="red" text="Sign Up" />
                <Button color="green" text="Log Out" />
              </div>
            </div>
            <div className=" grow flex flex-col m-20 border-8 border-black relative items-center">
              <div className="bg-black text-white text-3xl text-center py-4 font-nasa w-full">
                Fully <span className="text-amber-500">Custom</span>isable
                Keyboards
              </div>
              <KeyboardScreen />
              <div className="bg-slate-500 w-full">
                <KeyboardHomePageModal />
              </div>
            </div>
          </div> */}
        </div>
      }
    </div>
  );
};

export default HomePage;
