import React, { useState } from "react";
import KeyboardScreen from "../components/KeyboardScreen";
import Navbar from "../components/Navbar";
import LoadingPage from "./LoadingPage";
const HomePage = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="w-full h-full">
      {!loaded && <LoadingPage setLoaded={setLoaded} />}
      {loaded && (
        <div className="w-full h-full">
          <Navbar />
          <div className="flex h-full">
            <div className="bg-slate-900 basis-1/2 flex flex-col px-8">
              <div className="text-white text-xl font-fixedsys mt-5 mb-10">
                Lorem ipsum dolor sit amet.
              </div>
              <div className="text-amber-500 text-sm font-fixedsys mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
                venenatis metus, lobortis consequat tortor. Sed quis viverra
                elit. Quisque sit amet enim sit amet dui ullamcorper pulvinar
                non vitae turpis. Sed purus dui, dictum ut diam a, fringilla
                pulvinar libero. Pellentesque feugiat mi lacus, eget vehicula
                libero facilisis ac. Curabitur pellentesque tempor hendrerit.
                Pellentesque urna dui, pretium ac lectus sed, maximus aliquet
                nibh.
              </div>
              <div className="flex justify-around text-white">
                <button>Aaaa</button>
                <button>Aaaa</button>
              </div>
            </div>
            <div className="basis-1/2 border-2 border-black flex flex-col h-full">
              <div className="basis-3/4 bg-slate-100">
                <KeyboardScreen />
              </div>
              <div className="grow borde r-black border-2 bg-black text-white font-fixedsys">
                Elo
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
