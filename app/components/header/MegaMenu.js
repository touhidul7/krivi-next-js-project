"use client";
import { GoTriangleDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import React, { useEffect, useState } from "react";
import menuData from "../../../public/data/megaMenu.json";
import Link from "next/link";
import Image from "next/image";


const MegaMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  /* make a use effect to set the menuData in menuItems */
  useEffect(() => {
    setMenuItems(menuData.menuItems);
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed top-0">
      <div className="max-w-screen min-w-screen px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center justify-between lg:w-[90%] lg:mx-auto">
          <div className="hidden md:flex md:space-x-8 md:ml-10">
                {menuData.menuItems.map((menuItem, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="relative"
                  >
                    <button className="text-[#333]  px-3 py-2  text-sm  flex gap-2 items-center cursor-pointer hover:text-red-800 h-3 hover:border-b-2 border-red-800 menuitem font-graphic text-[.875rem] font-semibold">
                      {menuItem.title}
                      <GoTriangleDown className="icon" />
                    </button>
                    {activeMenu === index && (
                      <div className="absolute left-0 w-96 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="p-4">
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              <div className="font-medium">{subItem.title}</div>
                              <div className="text-gray-500">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex items-center">
              {/* Your logo here */}
              <Link href={"/"} className="text-lg font-bold">
                <Image
                  src={
                    "https://www.bain.com/contentassets/0b88e3e10a7b4592809517c28b75847e/logo_red_bain.svg"
                  }
                  width={200}
                  height={100}
                />
              </Link>
              <div className="hidden md:flex md:space-x-8 md:ml-10">
                {menuData.menuItems.map((menuItem, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveMenu(index)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="relative"
                  >
                    <button className="text-[#333]  px-3 py-2  text-sm  flex gap-2 items-center cursor-pointer hover:text-red-800 h-3 hover:border-b-2 border-red-800 menuitem font-graphic text-[.875rem] font-semibold">
                      {menuItem.title}
                      <GoTriangleDown className="icon" />
                    </button>
                    {activeMenu === index && (
                      <div className="absolute left-0 w-96 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                        <div className="p-4">
                          {menuItem.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                            >
                              <div className="font-medium">{subItem.title}</div>
                              <div className="text-gray-500">
                                {subItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <div className="flex items-center text-[#979797] gap-2 font-graphic  text-md cursor-pointer">
                Explore
                <IoIosSearch size={30} />
                {/* right items */}
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default MegaMenu;
