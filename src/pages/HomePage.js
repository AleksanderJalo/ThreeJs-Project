import React, { useEffect, useState } from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Navbar from "../components/Navbar";
import ContactLayout from "../components/Layouts/ContactLayout";
import GalleryLayout from "../components/Layouts/GalleryLayout";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import { AnimatePresence, motion } from "framer-motion";
import AboutUsLayout from "../components/Layouts/AboutUsLayout";
import LogInButton from "../components/LogInButton";
import SignInButton from "../components/SignInButton";
import LogInInfoModal from "../components/Layouts/HomeLayoutModals/LogInInfoModal";
const HomePage = () => {
  const [layout, setLayout] = useState("Home");
  const [showLayout, setShowLayout] = useState("Home");
  useEffect(() => {
    console.log(showLayout);
    if (layout !== showLayout) {
      setTimeout(() => {
        setShowLayout(layout);
      }, 500);
    }
  });
  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col bg-[#DFD0BB] min-w-screen min-h-screen max-w-screen max-h-screen">
        <Navbar setLayout={setLayout} layout={layout} />
        {showLayout === "Home" && <HomeLayout layout={layout} />}
        {showLayout === "About Us" && <AboutUsLayout layout={layout} />}
        {showLayout === "Contact" && <ContactLayout layout={layout} />}
        {/* {layout === "Products" && <ProductsLayout />}
          {layout === "Gallery" && <GalleryLayout />}
          {layout === "About Us" && <AboutUsLayout />}
          // {layout === "Contact" && <ContactLayout />} */}
      </div>
      <div className="absolute bottom-4 right-[136px]">
        <div className="relative flex gap-4">
          <AnimatePresence>
            <motion.div
              initial={{ y: 1000, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 1000, opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex gap-4"
            >
              <LogInButton />
              <SignInButton />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {layout === "Home" && <LogInInfoModal showLayout={showLayout} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
