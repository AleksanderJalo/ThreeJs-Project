import React, { useEffect, useState } from "react";

const LoadingPage = (props) => {
  const [dotsNumber, setDotsNumber] = useState(0);
  let count;
    if (dotsNumber > 11) {
        props.setLoaded(true);
    }
  useEffect(() => {
    count = setInterval(() => {
      setDotsNumber(dotsNumber + 1);
    }, 200);

    return () => clearInterval(count);
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white font-fixedsys text-5xl">
      <div className="flex flex-col gap-6">
        <div className="text-left">
          LOADING<span className="text-3xl">...</span>
        </div>
        <div className="w-[250px] h-[30px] border-2 border-white flex gap-1">
          {dotsNumber > 0 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] ml-[5px]"></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 1 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] "></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 2 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] "></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 3 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] "></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 4 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] "></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px]"></div>
          )}
          {dotsNumber > 5 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] "></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px]"></div>
          )}
          {dotsNumber > 6 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px]"></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 7 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] ]"></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 8 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] ]"></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
          {dotsNumber > 9 ? (
            <div className=" w-[20px] h-[20px] bg-white mt-[3px] ]"></div>
          ) : (
            <div className="hidden w-[20px] h-[20px] bg-white mt-[3px] "></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
