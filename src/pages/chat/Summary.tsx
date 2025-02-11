import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from '@components/Buttons';
import BottomNavigation from '@components/BottomNavigation';

const Summary: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 flex items-center">
        <BackButton onClick={() => navigate(-1)} />
        <span className="flex-1 text-center font-semibold">감정일기</span>
      </div>

      {/* Main content */}
      <div className="flex-1 px-4 pb-20">
        {/* Date Navigation */}
        <div className="flex items-center justify-between mb-4">
          <button className="p-2">
            <span className="text-lg">←</span>
          </button>
          <span className="font-medium">2025년 1월 31일</span>
          <button className="p-2">
            <span className="text-lg">→</span>
          </button>
        </div>

        {/* Diary Content */}
        <div className="h-[60vh] bg-white rounded-3xl p-6 mb-4 overflow-y-auto scrollbar-hide">
          <div className="mb-6">
            <div className="inline-block bg-[#FF6D81] text-white rounded-full px-4 py-1 text-sm mb-4">
              감정일기
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">사건</h3>
                <p className="text-sm text-gray-600">기념일인데 남자친구가 밤의점 조물점인 사서 왔다.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">생각</h3>
                <p className="text-sm text-gray-600">기념일인데 이렇게 간단하게 넘어가는 게 맞나? 차이도 편지나 꽃이라도 있었으면 했다.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">감정</h3>
                <p className="text-sm text-gray-600">너무 서운하고, 기대가 꺾인 느낌이 들었다.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">행동</h3>
                <p className="text-sm text-gray-600">별 말이 없어지자마자 속으로 계속 신경 쓰였고, 남자친구에게 연락을 안 했다.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">결과</h3>
                <p className="text-sm text-gray-600">친구와 이야기를 나누면서 감정을 정리했고, 차분하게 내 감정을 솔직하게 말하보기로 결심했다.</p>
              </div>
            </div>
          </div>

          {/* AI Feedback Section */}
          <div className="bg-[#FFF6F7] rounded-2xl p-4">
            <div className="inline-block bg-[#FFE0E4] text-[#FF6D81] rounded-full px-4 py-1 text-sm mb-4">
              수지의 제안
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 mt-1 text-[#FF6D81]">✓</div>
                <p className="text-sm flex-1">"나 기념일이라서 뭔가 특별한 걸 기대했어."</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 mt-1 text-[#FF6D81]">✓</div>
                <p className="text-sm flex-1">"조금이라도 고민한 흔적이 있었다면, 평가 더 마음이 덜 그랬을 것 같아."</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 mt-1 text-[#FF6D81]">✓</div>
                <p className="text-sm flex-1">"비싼 걸 바란 게 아니라, 네가 나를 생각하고 준비했다는 느낌이었으면 했지만."</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              이렇게 얘기하면 됐을 것도 아니고, 네 감정도 솔직하게 표현하게 표현할 필요가 있어!
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Summary;