import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@components/BottomNavigation';
import { Bell, ChevronRight, User, Settings, Bell as BellIcon, Info, LogOut } from 'lucide-react';

const Mypage: React.FC = () => {
  const navigate = useNavigate();

  const settingsItems = [
    { icon: <User size={20} />, label: '프로필 수정', path: '/profile' },
    { icon: <BellIcon size={20} />, label: '알림 설정', path: '/notifications' },
    { icon: <Settings size={20} />, label: '테마 설정', path: '/theme' },
    { icon: <Info size={20} />, label: '앱 정보', path: '/info' },
  ];

  return (
    <div className="h-full w-full flex flex-col bg-gray-50">
      {/* Header */}
      <div className="h-16 px-4 flex items-center bg-white">
        <span className="flex-1 text-center font-semibold">마이페이지</span>
        <Bell size={24} />
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 pb-20">
        {/* Profile Section */}
        <div className="mt-6 flex flex-col items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={40} className="text-gray-500" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">사용자님</h3>
          <p className="mt-2 text-sm text-rose-500">❤️ 커플 매칭됨</p>
        </div>

        {/* Settings List */}
        <div className="mt-8 bg-white rounded-2xl overflow-hidden">
          {settingsItems.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="flex items-center px-4 py-4 border-b border-gray-100 last:border-b-0"
            >
              <div className="text-gray-600">{item.icon}</div>
              <span className="ml-3 flex-1">{item.label}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </div>
          ))}
        </div>

        {/* Logout Button */}
        <button 
          className="mt-6 w-full py-4 flex items-center justify-center space-x-2 text-red-500 bg-white rounded-2xl"
          onClick={() => {/* 로그아웃 로직 */}}
        >
          <LogOut size={20} />
          <span>로그아웃</span>
        </button>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Mypage;