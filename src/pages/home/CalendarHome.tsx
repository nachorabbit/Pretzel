import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, FullButton } from '@components/Buttons';
import BottomNavigation from '@components/BottomNavigation';
import { Bell } from 'lucide-react';

const Calendar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 flex items-center">
        <BackButton onClick={() => {navigate('/');}} />
        <span className="flex-1 text-center font-semibold">감정일기</span>
        <Bell size={24} />
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 pb-20">
        {/* Notice */}
        <div className="text-center py-4 mb-4 bg-white rounded-2xl">
          우리가 만난 지 <span className="font-bold">100</span>일
        </div>

        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <span className="text-lg">←</span>
          </button>
          <span className="font-medium">2025년 1월</span>
          <button className="p-2">
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center mb-2">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {/* Example day - This would be generated dynamically */}
          <div className="aspect-square flex items-center justify-center bg-white rounded-lg">
            <span>1</span>
          </div>
          {/* More days would be added here */}
        </div>

        {/* 채팅 시작하기 버튼 */}
        <div className="w-full py-3">
          <FullButton 
            text="채팅 시작하기"
            state="active"
            backgroundColor="#FFFFFF"
            textColor="#000000"
            onClick={() => {navigate('/Chat');}}
            shadow="md"
            fontSize="pretzel"
          />
        </div>

        {/* 조언카드 보기 버튼 */}
        <div className="w-full py-3">
          <FullButton 
            text="조언카드 보기"
            state="active"
            backgroundColor="#FFFFFF"
            textColor="#000000"
            onClick={() => {navigate('/Summary');}}
            shadow="md"
            fontSize="pretzel"
          />
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Calendar;