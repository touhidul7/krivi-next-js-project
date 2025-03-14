'use client'
import React, { useState } from 'react';
import menuData from '../../../public/data/megaMenu.json';
import Link from 'next/link';

const MegaMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            {/* Your logo here */}
                            <Link href={""} className="text-lg font-bold">
                                Logo
                            </Link>
                        </div>
                        <div className="hidden md:flex md:space-x-8 md:ml-10">
                            {menuData.menuItems.map((menuItem, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveMenu(index)}
                                    onMouseLeave={() => setActiveMenu(null)}
                                    className="relative"
                                >
                                    <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                                        {menuItem.title}
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
                                                        <div className="text-gray-500">{subItem.description}</div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MegaMenu;