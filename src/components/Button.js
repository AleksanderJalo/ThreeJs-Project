import React from "react";

const Button = (props) => {
  const color = props.color;
  const colorDict = {
    red: "from-red-600 to-red-900 hover:from-red-700 hover:to-red-900 hover:shadow-red-800",
    yellow:
      "from-yellow-600 to-yellow-900 hover:from-yellow-700 hover:to-yellow-900 hover:shadow-yellow-800",
    green:
      "from-green-600 to-green-900 hover:from-green-700 hover:to-green-900 hover:shadow-green-800",
  };
  return (
    <button
      className={`${colorDict[color]} font-fixedsys bg-gradient-to-tr rounded-xl hover:shadow-md border-white border-2 px-3 py-1 text-3xl`}
    >
      {props.text}
    </button>
  );
};

export default Button;
