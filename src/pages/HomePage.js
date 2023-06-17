import React, { useEffect, useState } from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Navbar from "../components/Navbar";
import ContactLayout from "../components/Layouts/ContactLayout";
import GalleryLayout from "../components/Layouts/GalleryLayout";
import ProductsLayout from "../components/Layouts/ProductsLayout";
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
          <LogInButton />
          <SignInButton />
        {showLayout === "Home" && <div className="absolute bottom-24">
          <div className="relative w-full h-full font-nasa ml-22">
            <div className="absolute bg-behindModal h-full rounded-xl -top-3 -right-3 w-full"></div>
            <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-8 w-full">
              Sing in here [or log in if you already have accout] to see the
              creation of others or save and post your own
            </div>
          </div>
        </div>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
