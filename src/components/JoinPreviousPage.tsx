import React from 'react';
import { ChevronLeft } from 'lucide-react';

interface JoinPreviousPageProps {
  onClick?: () => void;
}

export const JoinPreviousPage: React.FC<JoinPreviousPageProps> = ({ onClick }) => {
  return (
    <button 
      className="flex items-center gap-1 text-[#A6A5A5] p-0"
      onClick={onClick}
    >
      <ChevronLeft size={16} />
      <span className="text-pretzel font-semibold">이전으로</span>
    </button>
  );
};