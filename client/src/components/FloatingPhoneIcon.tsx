import { Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { SplashContext } from '../contexts/SplashContext';

const FloatingPhoneIcon = () => {
  const showSplash = useContext(SplashContext);

  if (showSplash) return null;

  return (
    <AnimatePresence>
      <motion.a
        href="tel:+919699572999"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }} // slightly delayed after splash
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-brand-red rounded-full shadow-[0_0_20px_rgba(255,26,26,0.6)] hover:shadow-[0_0_30px_rgba(255,26,26,0.9)] hover:-translate-y-1 transition-all duration-300 group"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <Phone className="w-6 h-6 text-white group-hover:block" />
        </motion.div>
        {/* Glow pulsing effect behind */}
      </motion.a>
    </AnimatePresence>
  );
};

export default FloatingPhoneIcon;
