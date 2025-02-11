import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1] // 더 자연스러운 이징
      }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
};

export default PageLayout; 