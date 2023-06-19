import React, { useEffect, useState } from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Navbar from "../components/Navbar";
import { ReactComponent as Arrow } from "../images/curved_arrow.svg";
import ContactLayout from "../components/Layouts/ContactLayout";
import GalleryLayout from "../components/Layouts/GalleryLayout";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import { AnimatePresence, motion } from "framer-motion";
import AboutUsLayout from "../components/Layouts/AboutUsLayout";
import LogInButton from "../components/LogInButton";
import SignInButton from "../components/SignInButton";
const HomePage = () => {
  const [layout, setLayout] = useState("Home");
  const [showLayout, setShowLayout] = useState("Home");
  useEffect(() => {
    console.log(showLayout);
    if (layout !== showLayout) {
      setTimeout(() => {
        setShowLayout(layout);
      }, 1500);
    }
  });
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col bg-[#DFD0BB] min-w-screen min-h-screen max-w-screen max-h-screen">
        <Navbar setLayout={setLayout} layout={layout} />
        {showLayout === "Home" && <HomeLayout layout={layout} />}
        {showLayout === "About Us" && <AboutUsLayout layout={layout} />}
        {/* {layout === "Products" && <ProductsLayout />}
          {layout === "Gallery" && <GalleryLayout />}
          {layout === "About Us" && <AboutUsLayout />}
          {layout === "Contact" && <ContactLayout />} */}
      </div>
      <div className="absolute bottom-4 right-[136px]">
        <div className="relative flex gap-4">
          <AnimatePresence>
            <motion.div
              initial={{ y: 1000, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 1000, opacity: 0 }}
              transition = {{duration: 1}}
              className="flex gap-4"
            >
              <LogInButton />
              <SignInButton />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {layout === "Home" && (
              <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 1000, opacity: 0 }}
                transition={{
                  duration: 1,
                  delay: showLayout === "Home" ? 0 : 1.5,
                }}
                className="absolute bottom-24"
              >
                <div className="relative w-full h-full font-nasa ml-22">
                  <div className="absolute bg-behindModal h-full rounded-xl -top-3 -right-3 w-full"></div>
                  <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-8 w-full">
                    <div className="absolute -left-[100px] top-[100px]">
                      <Arrow />
                    </div>
                    Sing in here [or log in if you already have accout] to see
                    the creation of others or save and post your own
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
