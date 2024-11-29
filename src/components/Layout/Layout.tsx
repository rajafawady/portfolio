import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Navigation/Sidebar';
import { MatrixRain } from '@/components/Effects/MatrixRain';
import { useTheme } from '@/context/ThemeContext';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import {GameDialog} from '@/components/Games/GameDialog';
import { ReactNode } from 'react';
import { SplashScreen } from './SplashScreen'; 

interface LayoutProps {
  children: ReactNode; 
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [matrixMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const { showGame, setShowGame } = useGame();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
    <SplashScreen isLoading={isLoading} fullText={'initializing_system...'}/>
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-white text-black'}`}>
      {/* Render MatrixRain only on the client side */}
      {isClient && matrixMode && <MatrixRain />}
      <Sidebar />
      <main className="md:ml-16 lg:ml-16">
        <div className="mx-auto">
          {children} 
        </div>

        {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <TooltipProvider>
          {/* Theme Toggle Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              {isClient && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-primary text-white"
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
                </motion.button>
              )}
            </TooltipTrigger>
            <TooltipContent sideOffset={4}>Toggle Theme</TooltipContent>
          </Tooltip>

          {/* Play Game Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              {isClient && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-primary text-white"
                  onClick={() => setShowGame(true)}
                >
                  🎮
                </motion.button>
              )}
            </TooltipTrigger>
            <TooltipContent sideOffset={4}>Play Game</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Game Dialog */}
      <GameDialog showGame={showGame} setShowGame={setShowGame} />

      </main>
     
    </div>
    </>
  );
}
