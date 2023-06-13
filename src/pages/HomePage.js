import React, { useState } from "react";
import HomeLayout from "../components/Layouts/HomeLayout";
import Navbar from "../components/Navbar";
import ContactLayout from "../components/Layouts/ContactLayout";
import GalleryLayout from "../components/Layouts/GalleryLayout";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import AboutUsLayout from "../components/Layouts/AboutUsLayout";


const HomePage = () => {
  const [layout, setLayout] = useState("Home");
  return (
    <div className="w-full h-full">
      {
        <div className="flex flex-col bg-[#DFD0BB] min-w-screen min-h-screen max-w-screen max-h-screen">
          <Navbar setLayout={setLayout} layout={layout} />
          {layout === "Home" && <HomeLayout />}
          {layout === "Products" && <ProductsLayout />}
          {layout === "Gallery" && <GalleryLayout />}
          {layout === "About Us" && <AboutUsLayout />}
          {layout === "Contact" && <ContactLayout />}
        </div>
      }
    </div>
  );
};

export default HomePage;
