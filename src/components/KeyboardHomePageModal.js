import React from "react";
import { ReactComponent as Cart } from "../images/cart.svg";
const KeyboardHomePageModal = () => {
  return (
    <div className=" bg-white rounded-t-xl px-3 flex flex-col">
      <div className="text-gray-500 p-2 text-left text-md mt-2">
        Premium Keyboards
      </div>
      <div className="text-black p-2 text-xl">
        New Ultimate Gaming Keyboard Pro Extra Definite Edition
      </div>
      <div className="text-gray-500 p-2 text-left text-md mb-4">
        Wireless Low-Profile RGB Tenkeyless Optical Keyboard
      </div>
      <div className="mb-2">
        <div className="cursor-pointer bg-blue-500 rounded-2xl justify-between py-2 w-1/2 text-white flex px-6 items-center mb-4">
          <div>
            <div className="flex gap-2 items-center">
              <Cart className="h-[30px] w-[30px]" />
              Add To Cart
            </div>
            
          </div>
          <div className="text-md">| $199.99</div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardHomePageModal;
