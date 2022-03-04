import {
    HomeIcon,
    ChartBarIcon,
    CurrencyDollarIcon
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";



function Sidebar() {
    
    return(
        <div class="min-h-screen flex flex-row bg-gray-100">
            <div class="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
                <div class="flex items-center justify-center h-20 shadow-md">
                <   h1 class="text-3xl text-blue-500">fpldigest</h1>
                </div>
                <ul class="flex flex-col py-4">
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-home"></i></span>
                        <span class="text-sm font-medium">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-music"></i></span>
                        <span class="text-sm font-medium">Stats</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="bx bx-drink"></i></span>
                        <span class="text-sm font-medium">Price Changes</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;