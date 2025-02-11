import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, FullButton } from '@components/Buttons';

const Join: React.FC = () => {
  const [step, setStep] = useState(1);
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const navigate = useNavigate();

  const progressWidth = `${(step / 3) * 332}px`;

  const getTitles = () => {
    switch (step) {
      case 1:
        return {
          title: '둘만의 애칭을 정해요!',
          subtitle: '어떤 이름이 좋을까요?'
        };
      case 2:
        return {
          title: '성별을 알려주세요',
          subtitle: '더 나은 서비스를 위해 필요해요'
        };
      case 3:
        return {
          title: '생일을 입력해주세요',
          subtitle: '특별한 날을 기억하고 싶어요'
        };
      default:
        return { title: '', subtitle: '' };
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigate('/connect');
    }
  };

  const renderInput = () => {
    switch (step) {
      case 1:
        return (
          <input
            type="text"
            className={`w-full max-w-[332px] py-2.5 px-8 rounded-pretzel bg-white
              border-2 ${nickname.length > 0 ? 'border-[#FF6D81]' : 'border-[#A6A5A5]'} text-pretzel text-center font-semibold
              text-[#A6A5A5] focus:outline-none`}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="나중에 바꿀 수 있어요."
          />
        );
      case 2:
        return (
          <div className="flex justify-center gap-4 max-w-[332px] mx-auto">
            {['남성', '여성'].map((option) => (
              <button
                key={option}
                className={`flex-1 py-2.5 rounded-pretzel ${
                  gender === option ? 'bg-[#FF6D81] text-white' : 'bg-white border-2 border-[#A6A5A5]'
                }`}
                onClick={() => setGender(option)}
              >
                {option}
              </button>
            ))}
          </div>
        );
      case 3:
        return (
          <input
            type="date"
            className={`w-full max-w-[332px] py-2.5 px-8 rounded-pretzel bg-white
              border-2 ${birthdate ? 'border-[#FF6D81]' : 'border-[#A6A5A5]'} text-pretzel text-center font-semibold
              text-[#A6A5A5] focus:outline-none`}
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-full flex flex-col pt-[6.4vh]">
      {/* Header - Fixed at top */}
      <div className="h-16 px-4 flex items-center">
        <BackButton onClick={() => step > 1 ? setStep(step - 1) : navigate('/')} />
      </div>

      {/* Progress Bar */}
      <div className="w-full px-4 mb-8">
        <div className="max-w-[332px] h-2 mx-auto bg-white rounded-full shadow-sm">
          <div className="h-2 bg-[#FF6D81] rounded-full" style={{ width: progressWidth }}/>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-7" /> {/* 20px spacer */}

      {/* Main content - Fills remaining space */}
      <div className="flex-1 flex flex-col px-4">
        {/* Title section */}
        <div className="text-center mb-12">
          <h1 className="text-pretzel font-semibold text-[#282828] leading-normal">
            {getTitles().title}
          </h1>
          <p className="text-pretzel font-semibold text-[#282828] leading-normal">
            {getTitles().subtitle}
          </p>
        </div>

        {/* Input field */}
        <div className="w-full flex justify-center">
          {renderInput()}
        </div>

        {/* Spacer to push button to bottom */}
        <div className="h-[80px]" />

        {/* Next Button */}
        <div className="px-2 pb-28">
          <FullButton 
            text="다음"
            state="active"
            onClick={handleNext}
            shadow="md"
            fontSize="pretzel"
            fontWeight="bold"
          />
        </div>
      </div>
    </div>
  );
};

export default Join;