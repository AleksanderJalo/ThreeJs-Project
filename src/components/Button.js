import React from "react";

const Button = (props) => {
  const color = props.color;
  return (
    <button
      className={`font-fixedsys bg-gradient-to-tr from-${color}-600 to-${color}-900 hover:from-${color}-700 hover:to-${color}-900
       rounded-xl hover:shadow-md hover:shadow-${color}-800 border-white border-2 px-3 py-1 text-3xl`}
    >
      {props.text}
    </button>
  );
};

export default Button;
