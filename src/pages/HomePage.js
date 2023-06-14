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
      <div className="absolute bottom-4 right-4 flex gap-4">
        <LogInButton/>
        <SignInButton/>
      </div>
    </div>
  );
};

export default HomePage;
