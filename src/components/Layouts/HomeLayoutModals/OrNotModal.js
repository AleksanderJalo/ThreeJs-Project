import React from "react";

const OrNotModal = () => {
  return (
    <div className="relative w-full h-full left-[350px]  font-nasa ml-32 mt-24">
      <div className="absolute bg-behindModal rounded-xl -bottom-3 -right-3 w-full h-full"></div>
      <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-8 w-full">
        <div className="text-4xl font-nasa flex gap-2 pb-8">
          Or <span className="text-behindModal"> not</span>
        </div>
        <div className="text-xl text-center">
          Just use some of our tameplates or other users .. btw you still can
          modify them as you want
        </div>
      </div>
    </div>
  );
};

export default OrNotModal;
