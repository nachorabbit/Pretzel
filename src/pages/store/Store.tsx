import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Construction } from 'lucide-react';
import BottomNavigation from '@components/BottomNavigation';

const Storetemp: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 flex items-center bg-white">
        <span className="flex-1 text-center font-semibold">스토어</span>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pb-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center">
          <Construction className="w-12 h-12 text-gray-400 mb-4" />
          <p className="text-gray-500 font-medium">준비중이에요.</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Storetemp;