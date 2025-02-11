import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Copy } from 'lucide-react';
import { BackButton, FullButton } from '@components/Buttons';

const Connect: React.FC = () => {
  const navigate = useNavigate();
  const [partnerCode, setPartnerCode] = useState('');
  const myCode = 'A36DE4F'; // 실제로는 서버에서 생성된 코드를 사용해야 합니다

  const handleCopyCode = () => {
    navigator.clipboard.writeText(myCode);
    // TODO: 복사 완료 토스트 메시지 표시
  };

  const handleConnect = () => {
    // TODO: 파트너 코드 검증 및 연결 로직 구현
    if (partnerCode.trim()) {
      // 연결 성공 시 다음 화면으로 이동
      navigate('/calendar');
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 flex items-center">
        <BackButton onClick={() => navigate('/')} />
      </div>

      {/* Main content */}
      <div className="flex-1 px-6 flex flex-col items-center">
        {/* Title Section */}
        <h2 className="mt-8 text-2xl font-bold text-center">
          우리, 더 가까워질 준비되었나요?
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          연인에게 코드를 공유해주세요.
        </p>

        {/* Code Display */}
        <div className="mt-12 w-full">
          <div className="bg-gray-50 p-6 rounded-2xl flex justify-between items-center">
            <span className="text-2xl font-bold tracking-wider">{myCode}</span>
            <button 
              onClick={handleCopyCode}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Copy size={20} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Input Section */}
        <div className="mt-12 w-full space-y-4">
          <input
            type="text"
            value={partnerCode}
            onChange={(e) => setPartnerCode(e.target.value)}
            placeholder="코드를 입력해주세요."
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
          />

          {/* 연결하기 버튼 */}
          <div className="w-full py-3">
            <FullButton 
              text="연결하기"
              state="active"
              onClick={handleConnect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;