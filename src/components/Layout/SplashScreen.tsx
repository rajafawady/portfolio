import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  isLoading: boolean;
  fullText: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ isLoading, fullText }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isLoading) {
      setShowSplash(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (showSplash) {
      let index = 0;
      const typingEffect = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        
        if (index > fullText.length) {
          clearInterval(typingEffect);
        }
      }, 100);

      return () => clearInterval(typingEffect);
    }
  }, [showSplash]);

  if (!showSplash) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center 
                 bg-black text-green-400 
                 font-mono text-lg p-4 overflow-hidden"
    >
      <div className="w-full max-w-2xl bg-black border-2 border-green-600 p-4 rounded-lg">
        <div className="typing-container">
          <span className="text-purple-400">fawad</span>
          <span className="text-white">@</span>
          <span className="text-green-500">portfolio</span>
          <span className="text-white">:</span>
          <span className="text-blue-400">~</span>
          {' '}
          <motion.span
            className="inline-block"
            animate={{
              opacity: [1, 0],
              transition: {
                duration: 0.7,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {displayText}
            <motion.span 
              className="inline-block ml-1 bg-green-400 w-2 h-5"
              animate={{
                opacity: [1, 0],
                transition: {
                  duration: 0.7,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            />
          </motion.span>
        </div>
      </div>

      {/* Subtle Terminal Scan Line Effect */}
      <motion.div
        initial={{ top: 0 }}
        animate={{ 
          top: '100%',
          transition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        className="absolute left-0 right-0 h-1 bg-green-500 opacity-30 pointer-events-none"
      />
    </motion.div>
  );
};