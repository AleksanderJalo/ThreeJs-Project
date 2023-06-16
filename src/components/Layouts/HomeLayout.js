import React from "react";
import CustomizeKeyModal from "./HomeLayoutModals/CustomizeKeyModal";
import KeyboardScreen from "../KeyboardScreen";
import UseVarietyModal from "./HomeLayoutModals/UseVarietyModal";
const HomeLayout = (props) => {
  return (
    <div className="flex justify-center gap-44">
      <div className="flex flex-col items-center w-1/3 gap-32">
        <CustomizeKeyModal />
        <div className="flex">
          <UseVarietyModal />

          <div className="relative w-full h-full font-nasa ml-32">
            <div className="absolute bg-behindModal h-full rounded-xl -top-3 -left-3 w-1/2"></div>
            <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-12 w-1/2">
              Use variety of customizable setting to adjust your own personal
              thnig .. i mean keyboard.. we can offer a lots of adjustable
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 mt-10">
        <div className="h-2/3">
          <KeyboardScreen />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
