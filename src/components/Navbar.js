import React from 'react'

const Navbar = () => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar
// import { useState } from "react";
// const Navbar = () => {
//   const links = ["Games", "Tracks", "Cars"];
//   const [showMenu, setShowMenu] = useState(false);
//   const menuHandler = () => {
//     setShowMenu((prevState) => !prevState);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-between py-8 px-14 text-3xl text-[#05386B]">
//         <span className="flex items-center font-bold text-[40px] md:text-[50px] z-50">
//           <ion-icon name="car-sport-outline"></ion-icon>
//           TOPCar
//         </span>
//         <div className="hidden h-10 md:pt-2 md:flex md:space-x-12 items-center">
//           {links.map((link) => (
//             <div className="group" key={link}>
//               <a href="#">{link}</a>
//               <div className="mx-2 border-[#05386B] duration-200 group-hover:border-2 group-hover:border-b"></div>
//             </div>
//           ))}
//           <button className="btn">Log In</button>
//           <button className="btn">Sign Up</button>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={menuHandler}
//             className={`hamburger block z-40 md:hidden focus:outline-none${
//               showMenu ? " open" : ""
//             }`}
//           >
//             <span className="hamburger-top"></span>
//             <span className="hamburger-middle"></span>
//             <span className="hamburger-bottom"></span>
//           </button>
//         </div>
//       </div>
//       <div
//         className={`absolute md:hidden top-0 bottom-0 left-0 flex flex-col self-end  w-full py-40   justify-between text-3xl bg-white${
//           !showMenu ? " hidden" : ""
//         }`}
//       >
//         {links.map((link) => (
//           <a href="#" key={link} className="text-[#05386B] mx-auto">
//             {link}
//           </a>
//         ))}
//         <button className="btn hover:bg-white mx-40">Log In</button>
//         <button className="btn hover:bg-white mx-40">Sign Up</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
