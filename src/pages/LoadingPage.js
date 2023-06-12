import React, { useEffect, useState } from "react";

const LoadingPage = (props) => {
  const [dotsNumber, setDotsNumber] = useState(0);

  if (dotsNumber > 11) {
    props.setAfterAnim(true);
  }
  useEffect(() => {
    let count;
    count = setInterval(() => {
      setDotsNumber((prevState) => {
        return prevState + 1;
      });
    }, 100);

    return () => clearInterval(count);
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-6 text-5xl font-fixedsys text-black">
      <div className="text-center ">
        LOADING<span className="text-3xl">...</span>
      </div>
      <div className="w-[250px] h-[30px] border-2 border-black flex gap-1">
        {dotsNumber > 0 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] ml-[5px]"></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 1 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] "></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 2 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] "></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 3 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] "></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 4 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] "></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px]"></div>
        )}
        {dotsNumber > 5 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] "></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px]"></div>
        )}
        {dotsNumber > 6 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px]"></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 7 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] ]"></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 8 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] ]"></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
        {dotsNumber > 9 ? (
          <div className=" w-[20px] h-[20px] bg-black mt-[3px] ]"></div>
        ) : (
          <div className="hidden w-[20px] h-[20px] bg-black mt-[3px] "></div>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
