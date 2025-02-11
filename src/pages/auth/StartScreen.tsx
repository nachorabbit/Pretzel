import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FullButton } from '@components/Buttons'; 
import googleLogo from '@assets/google.svg';


interface Card {
  id: number;
  image: string;
}

const StartScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();

  const cards: Card[] = [
    { id: 1, image: new URL('@assets/StartScreen/card1.svg', import.meta.url).href },
    { id: 2, image: new URL('@assets/StartScreen/card2.svg', import.meta.url).href },
    { id: 3, image: new URL('@assets/StartScreen/card3.svg', import.meta.url).href },
    { id: 4, image: new URL('@assets/StartScreen/card4.svg', import.meta.url).href },

  ];

  const handleClick = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentPage(currentPage === cards.length - 1 ? 0 : currentPage + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen">
      <div className="h-full w-full flex flex-col pt-[6.4vh]">
        <div className="flex flex-col flex-1">
          {/* Card Carousel */}
          <div 
            className="flex-1 w-full px-10 pt-10 pb-2 h-full"
            onClick={handleClick}
          >
            <motion.div 
              className="w-full h-full bg-white rounded-pretzel shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPage}
                  src={cards[currentPage].image}
                  alt={`Card ${currentPage + 1}`}
                  className="w-full h-full object-contain p-4"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
                  onAnimationComplete={() => setIsAnimating(false)}
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Page Indicator */}
          <div className="flex justify-center gap-2 py-2.5">
            {cards.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentPage 
                    ? 'w-6 bg-[#FF6D81]' 
                    : 'w-2 bg-[#FFB1BD]'
                }`}
              />
            ))}
          </div>

          {/* Spacer */}
          <div className="h-7" />

          {/* Google Sign In Button */}
          <div className="px-2 pb-4">
            <FullButton 
              text="구글로 시작하기"
              state="active"
              backgroundColor="#FFFFFF"
              textColor="#000000"
              icon={<img src={googleLogo} alt="Google logo" className="w-[12px] h-[12px]" />}
              onClick={() => navigate('/Join')}
              shadow="md"
              fontSize="pretzel"
            />
          </div>

          {/* skip join Button */}
          <div className="px-2 pb-8">
            <FullButton 
              text="(개발자용) 회원가입 건너뛰기"
              state="active"
              backgroundColor="#FFFFFF"
              textColor="#000000"
              onClick={() => navigate('/calendar')}
              shadow="md"
              fontSize="pretzel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;