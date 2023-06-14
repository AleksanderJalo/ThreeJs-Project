import React from "react";
import LeftUpHomeModal from "./HomeModals/LeftUpHomeModal";
import LeftDownHomeModal from "./HomeModals/LeftDownHomeModal";
import MiddleDownHomeModal from "./HomeModals/MiddleDownHomeModal";
import RightUpHomeModal from "./HomeModals/RightUpHomeModal";
import RightDownHomeModal from "./HomeModals/RightDownHomeModal";
const HomeLayout = (props) => {
  return (
    <div className="flex min-w-full justify-center h-full grow mb-20 gap-12">
      <div className="bg-behindModal w-2/5  h-1/2 rounded-xl p-64  relative">
        <div className="absolute bg-modalDark left-5 bottom-5 w-full h-full rounded-xl flex flex-col items-center">
          <div className="text-mainBackground text-2xl xl:text-6xl  pt-2 font-nasa mr-[113px]">
            <div>
              Custom<span className="text-behindModal">ize</span>
            </div>
          </div>
          <div className="text-mainBackground text-2xl xl:text-6xl font-nasa ml-[112px]">
            Key<span className="text-behindModal">board</span>
          </div>
        </div>
      </div>
      <div>bbb</div>
    </div>
  );
};

export default HomeLayout;
