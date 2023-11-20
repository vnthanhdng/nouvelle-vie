import React, { useState } from 'react';
import Sidebar from './Sidebar';

const RootLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      {isSidebarOpen && <Sidebar />}
      
      {/* Content area */}
      <div className="flex-1">
        
        
        
        {/* Main content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
