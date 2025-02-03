import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FullButton } from '../components/FullButton';
import googleLogo from '../assets/google.svg';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  image: string;
}

const StartScreen: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const navigate = useNavigate();

  const cards: Card[] = [
    { id: 1, image: new URL('../assets/StartScreen/card1.svg', import.meta.url).href },
    { id: 2, image: new URL('../assets/StartScreen/card2.svg', import.meta.url).href },
    { id: 3, image: new URL('../assets/StartScreen/card3.svg', import.meta.url).href },
    { id: 4, image: new URL('../assets/StartScreen/card4.svg', import.meta.url).href },
  ];

  const handleClick = (): void => {
    if (isAnimating || isDragging) return;
    setIsAnimating(true);
    setSlideDirection('left');
    setCurrentPage(currentPage === cards.length - 1 ? 0 : currentPage + 1);
  };

  const handleTouchStart = (e: React.TouchEvent): void => {
    if (isAnimating) return;
    setTouchStart(e.touches[0].clientX);
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent): void => {
    setTouchEnd(e.touches[0].clientX);
    if (Math.abs(touchStart - e.touches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = (): void => {
    if (!isDragging) {
      // 드래그가 아닌 일반 터치인 경우 - 다음 카드로 이동
      setSlideDirection('left');
      setCurrentPage(currentPage === cards.length - 1 ? 0 : currentPage + 1);
      return;
    }

    // 드래그인 경우 - 기존 로직 유지
    if (touchStart - touchEnd > 75) {
      setSlideDirection('left');
      setCurrentPage(currentPage === cards.length - 1 ? 0 : currentPage + 1);
    }

    if (touchStart - touchEnd < -75) {
      setSlideDirection('right');
      setCurrentPage(currentPage === 0 ? cards.length - 1 : currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 h-screen">
      <div className="h-full w-full flex flex-col pt-[6.4vh]">
        <div className="flex flex-col flex-1">
          {/* Card Carousel */}
          <div 
            className="flex-1 w-full px-10 pt-10 pb-2 h-full"
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
                  initial={{ opacity: 0, x: slideDirection === 'left' ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDirection === 'left' ? -100 : 100 }}
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
          <div className="px-2 pb-28">
            <FullButton 
              text="구글로 시작하기"
              state="active"
              backgroundColor="#FFFFFF"
              textColor="#000000"
              icon={<img src={googleLogo} alt="Google logo" className="w-[12px] h-[12px]" />}
              onClick={() => {
                navigate('/join-name');
              }}
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