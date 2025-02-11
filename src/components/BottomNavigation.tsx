import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Store, User } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed bottom-[30px] left-0 right-0 flex justify-center">
      <motion.div 
        className="bg-white px-[15px] py-[15px] flex rounded-full"
        layout
      >
        <LayoutGroup>
          {/* 캘린더 홈 버튼 */}
          <motion.button 
            layout
            className={`flex items-center gap-2 px-[15px] py-2 rounded-full ${
              isActive('/calendar') ? 'bg-[#FF6E81]' : ''
            }`}
            onClick={() => navigate('/calendar')}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div layout>
              <Calendar 
                className={`w-6 h-6 ${isActive('/calendar') ? 'text-white' : 'text-gray-400'}`}
              />
            </motion.div>
            <AnimatePresence mode="wait">
              {isActive('/calendar') && (
                <motion.span
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="text-xs font-medium text-white overflow-hidden whitespace-nowrap"
                >
                  캘린더 홈
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <div className="w-[15px]" />

          {/* 스토어 버튼 */}
          <motion.button 
            layout
            className={`flex items-center gap-2 px-[15px] py-2 rounded-full ${
              isActive('/store') ? 'bg-[#FF6E81]' : ''
            }`}
            onClick={() => navigate('/store')}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div layout>
              <Store 
                className={`w-6 h-6 ${isActive('/store') ? 'text-white' : 'text-gray-400'}`}
              />
            </motion.div>
            <AnimatePresence mode="wait">
              {isActive('/store') && (
                <motion.span
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="text-xs font-medium text-white overflow-hidden whitespace-nowrap"
                >
                  스토어
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          
          <div className="w-[15px]" />

          {/* 프로필 버튼 */}
          <motion.button 
            layout
            className={`flex items-center gap-2 px-[15px] py-2 rounded-full ${
              isActive('/mypage') ? 'bg-[#FF6E81]' : ''
            }`}
            onClick={() => navigate('/mypage')}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div layout>
              <User 
                className={`w-6 h-6 ${isActive('/mypage') ? 'text-white' : 'text-gray-400'}`}
              />
            </motion.div>
            <AnimatePresence mode="wait">
              {isActive('/mypage') && (
                <motion.span
                  layout
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="text-xs font-medium text-white overflow-hidden whitespace-nowrap"
                >
                  프로필
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </LayoutGroup>
      </motion.div>
    </div>
  );
};

export default BottomNavigation; 