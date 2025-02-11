import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SelectBoxProps {
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick?: () => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({ title, subtitle, selected = false, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl mb-3 cursor-pointer
        ${selected ? 'bg-[#FFE9EC] border-2 border-[#FF6B7F]' : 'bg-white'}
      `}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-base font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
        <div className={`
          w-6 h-6 rounded-full border-2
          ${selected ? 'border-[#FF6B7F] bg-[#FF6B7F]' : 'border-gray-300'}
        `}>
          {selected && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ChooseChar: React.FC = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = React.useState<string>('든든한 내 편 나수지');

  return (
    <div className="min-h-screen bg-[#FFF1F3] p-6">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="text-2xl mb-8"
      >
        ←
      </button>

      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-2">
          고민을 털어놓을 상대를 골라주세요.
        </h1>
        <p className="text-gray-600">
          선택한 상대가 이야기를 듣고, 함께 답을 찾아줄 거예요.
        </p>
      </div>

      {/* Selection Options */}
      <div className="mb-8">
        <SelectBox
          title="든든한 내 편 나수지"
          subtitle="나를 가장 잘 아는 친구, 언제는 내 편이 되어주는 사람이에요."
          selected={selectedOption === '든든한 내 편 나수지'}
          onClick={() => setSelectedOption('든든한 내 편 나수지')}
        />
        <SelectBox
          title="심리상담가"
          subtitle="나를 가장 잘 아는 친구, 언제는 내 편이 되어주는 사람이에요."
          selected={selectedOption === '심리상담가'}
          onClick={() => setSelectedOption('심리상담가')}
        />
        <SelectBox
          title="가상의 연인"
          subtitle="나를 가장 잘 아는 친구, 언제는 내 편이 되어주는 사람이에요."
          selected={selectedOption === '가상의 연인'}
          onClick={() => setSelectedOption('가상의 연인')}
        />
      </div>

      {/* Start Button */}
      <button 
        onClick={() => navigate('/chat')}
        className="w-full bg-[#FF6B7F] text-white py-4 rounded-xl font-medium"
      >
        시작하기
      </button>
    </div>
  );
};

export default ChooseChar;