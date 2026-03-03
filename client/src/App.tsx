import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { SplashContext } from './contexts/SplashContext';
import AboutUs from './pages/AboutUs';
import OurProducts from './pages/OurProducts';
import FireSystem from './pages/FireSystem';
import BusinessAssociates from './pages/BusinessAssociates';
import ContactUs from './pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import FloatingPhoneIcon from './components/FloatingPhoneIcon';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/fire-system" element={<FireSystem />} />
        <Route path="/business-associates" element={<BusinessAssociates />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <SplashContext.Provider value={showSplash}>
        <div className={`flex flex-col min-h-screen bg-brand-black text-brand-white font-sans ${showSplash ? 'overflow-hidden h-screen' : 'overflow-x-hidden'}`}>
          <AnimatePresence>
            {!showSplash && (
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
                <Navbar />
              </motion.div>
            )}
          </AnimatePresence>
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <AnimatePresence>
            {!showSplash && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
          <FloatingPhoneIcon />
        </div>
      </SplashContext.Provider>
    </Router>
  );
}

export default App;
