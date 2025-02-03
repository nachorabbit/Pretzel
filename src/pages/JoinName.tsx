import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FullButton } from '../components/FullButton';
import { JoinPreviousPage } from '../components/JoinPreviousPage';

const JoinName: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col pt-[6.4vh]">
      {/* Header - Fixed at top */}
      <div className="h-16 px-4 flex items-center">
        <JoinPreviousPage onClick={() => navigate('/')} />
      </div>

      {/* Progress Bar */}
      <div className="w-full px-4 mb-8">
        <div className="max-w-[332px] h-2 mx-auto bg-white rounded-full shadow-sm">
          <div className="w-[114px] h-2 bg-[#FF6D81] rounded-full"/>
        </div>
      </div>

          {/* Spacer */}
          <div className="h-7" /> {/* 20px spacer */}

      {/* Main content - Fills remaining space */}
      <div className="flex-1 flex flex-col px-4">
        {/* Title section */}
        <div className="text-center mb-12">
          <h1 className="text-pretzel font-semibold text-[#282828] leading-normal">
            둘만의 애칭을 정해요!
          </h1>
          <p className="text-pretzel font-semibold text-[#282828] leading-normal">
            어떤 이름이 좋을까요?
          </p>
        </div>

        {/* Input field */}
        <div className="w-full flex justify-center">
          <input
            type="text"
            className={`w-full max-w-[332px] py-2.5 px-8 rounded-pretzel bg-white
              border-2 ${inputValue.length > 0 ? 'border-[#FF6D81]' : 'border-[#A6A5A5]'} text-pretzel text-center font-semibold
              text-[#A6A5A5] focus:outline-none`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="나중에 바꿀 수 있어요."
          />
        </div>

        {/* Spacer to push button to bottom */}
        <div className="h-[80px]" />

          {/* Next Button */}
          <div className="px-2 pb-28">
            <FullButton 
              text="다음"
              state="active"
              onClick={() => {
                navigate('/join-name');
              }}
              shadow="md"
              fontSize="pretzel"
              fontWeight="bold"
            />
          </div>
      </div>
    </div>
  );
};

export default JoinName;