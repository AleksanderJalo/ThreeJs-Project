import React from "react";
import CustomizeKeyModal from "./HomeLayoutModals/CustomizeKeyModal";
import KeyboardScreen from "../KeyboardScreen";
import UseVarietyModal from "./HomeLayoutModals/UseVarietyModal";
import OrNotModal from "./HomeLayoutModals/OrNotModal";
const HomeLayout = (props) => {
  return (
    <div className="flex justify-center gap-[220px]">
      <div className="flex flex-col items-center w-1/3 gap-24">
        <CustomizeKeyModal layout={ props.layout } />
        <div className="flex relative">
          <div className="mb-10">
            <UseVarietyModal layout={ props.layout} />
          </div>
          <div className="absolute bottom-1 left-12">
            <OrNotModal layout={ props.layout}/>
          </div>
        </div>
      </div>

      <div className="w-2/5 mt-10">
        <div className="h-3/5">
          <KeyboardScreen layout={ props.layout} />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
