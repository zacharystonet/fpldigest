import {
    HomeIcon,
    ChartBarIcon,
    CurrencyDollarIcon
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";



function Sidebar() {
    
    return(
        <div className="text-gray-500 bg-sky-700 p-5 text-xs lg:text-lg border-r 
        border-sky-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[20rem] 
        hidden md:inline-flex pb-36">
            <div className="space-y-4">
                <button className="flex items-center space-x-2 hover:text-white">
                    <HomeIcon className="text-white h-5 w-5" />
                    <p className="text-white">Home</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <ChartBarIcon className="text-white h-5 w-5" />
                    <p className="text-white">Stats</p>
                </button>
                <button className="flex items-center space-x-2 hover:text-white">
                    <CurrencyDollarIcon className="text-white h-5 w-5" />
                    <p className="text-white">Prices</p>
                </button>
                <hr className="border-t-[.1px] border-white" />

                {/* Playlists */}

            </div>
        </div>
    );
}

export default Sidebar;