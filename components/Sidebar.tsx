import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineCalculator, AiOutlineDashboard, AiOutlineMenu, AiOutlineMoneyCollect, AiOutlineOrderedList, AiOutlineUser } from 'react-icons/ai'; // Example icon for opening sidebar
import { CgClose } from 'react-icons/cg'; // Example icon for closing sidebar

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-30 flex flex-col flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'} bg-blue-800 text-white`}>
      <div className="flex items-center justify-between flex-shrink-0 p-2">
      {!isCollapsed && (
          <span className="text-xl font-semibold leading-8 whitespace-nowrap">Nouvelle Vie</span>
        )}
        <button onClick={toggleSidebar} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          {isCollapsed ? <AiOutlineMenu size={24} /> : <CgClose size={24} />}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="py-4 space-y-2">
          <Link href="/profile">
            <span className={`flex items-center p-2 text-base font-normal rounded-lg ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
            {!isCollapsed && <span>Profile</span>}
                {isCollapsed && <AiOutlineUser size={24} />}
            </span>
            
          </Link>
          <Link href="/my-list">
            <span className={`flex items-center p-2 text-base font-normal rounded-lg ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
            {!isCollapsed && <span>My List</span>}
                {isCollapsed && <AiOutlineOrderedList size={24} />}
            </span>
          </Link>
          <Link href="/dashboard">
            <span className={`flex items-center p-2 text-base font-normal rounded-lg ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
            {!isCollapsed && <span>Dashboard</span>}
                {isCollapsed && <AiOutlineDashboard size={24} />}
            </span>
          </Link>
          {/* Additional links */}
        </nav>
      </div>
      <div className="flex-shrink-0 p-2">
        <button className="flex items-center justify-center w-full px-4 py-2 text-base font-normal text-blue-800 bg-white rounded-lg hover:bg-gray-100">
        {!isCollapsed && <span>Convert Currency</span>}
                {isCollapsed && <AiOutlineCalculator size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
