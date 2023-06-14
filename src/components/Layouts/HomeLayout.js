import React from "react";
import LeftUpHomeModal from "./HomeModals/LeftUpHomeModal";
import LeftDownHomeModal from "./HomeModals/LeftDownHomeModal";
import MiddleDownHomeModal from "./HomeModals/MiddleDownHomeModal";
import RightUpHomeModal from "./HomeModals/RightUpHomeModal";
import RightDownHomeModal from "./HomeModals/RightDownHomeModal";
const HomeLayout = (props) => {
  return (
    <div className="flex min-w-full justify-center h-full grow mb-20">
      <div className="flex items-between ">
        <div className="flex flex-col mx-10 gap-10 w-3/5 mt-10 h-full" >
          <LeftUpHomeModal layout={props.layout} />
          <div className="flex justify-between h-3/5">
            <LeftDownHomeModal layout={props.layout} />
            <MiddleDownHomeModal layout={props.layout} />
          </div>
        </div>
        <div className="grow mt-10 rounded-xl w-2/5 flex flex-col gap-8 h-full mr-10">
          <RightUpHomeModal layout={props.layout} />
          <RightDownHomeModal layout={props.layout} />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
