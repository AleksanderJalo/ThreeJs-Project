import React from "react";
import LeftUpHomeModal from "./HomeModals/LeftUpHomeModal";
import LeftDownHomeModal from "./HomeModals/LeftDownHomeModal";
import MiddleDownHomeModal from "./HomeModals/MiddleDownHomeModal";
import RightUpHomeModal from "./HomeModals/RightUpHomeModal";
import RightDownHomeModal from "./HomeModals/RightDownHomeModal";
const HomeLayout = (props) => {
  return (
    <div className="flex min-w-full justify-center h-full grow mb-20 gap-12">
      <div className="bg-behindModal w-2/5  h-1/2 rounded-xl p-36 relative z-20">
        <div className="absolute bg-modalDark left-5 top-5 w-full h-full rounded-xl flex flex-col z-20 items-center">
          <div className="text-mainBackground text-4xl xl:text-6xl font-nasa mr-[113px] pt-10">
            <div>
              Custom<span className="text-behindModal">ize</span>
            </div>
          </div>
          <div className="text-mainBackground text-4xl xl:text-6xl font-nasa ml-[112px]">
            Key<span className="text-behindModal">board</span>
          </div>
          <div className="text-mainBackground font-fixedsys pb-32 py-10 px-3 md:px-6">
            Create your dream keyboard set ... Choose from boardbase sizes to
            keycap colors. Variety of possibilities that you can create on your
            own. Be creative. Be uniqe. Be yourself.
          </div>
        </div>
      </div>
      <div>bbb</div>
    </div>
  );
};

export default HomeLayout;
