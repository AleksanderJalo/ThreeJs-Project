import React from "react";
import Adam from "./AboutUsModals/Adam";
import Olo from "./AboutUsModals/Olo";

const AboutUsLayout = (props) => {
  return (
    <div className="flex justify-center gap-32 w-full items-center h-full grow">
        <Adam layout={props.layout} />
        <Olo layout={props.layout}/>
    </div>
  );
};

export default AboutUsLayout;
