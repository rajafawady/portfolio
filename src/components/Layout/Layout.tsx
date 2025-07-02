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
import { useCalendly } from "@/context/CalendlyContext";
import CalendlyWidget from '../MeetingScheduler/CalendlyWidget';
interface LayoutProps {
  children: ReactNode; 
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [matrixMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const { showGame, setShowGame } = useGame();
  const { openCalendly } = useCalendly();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    console.log("Saved Theme:"+theme);
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
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-foreground transition-colors duration-300">
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

          <Tooltip>
                <TooltipTrigger asChild>
                  {isClient && (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-full bg-primary text-white"
                      onClick={openCalendly}
                    >
                      📅
                    </motion.button>
                  )}
                </TooltipTrigger>
                <TooltipContent sideOffset={4}>Schedule Meeting</TooltipContent>
              </Tooltip>
        </TooltipProvider>
      </div>

      {/* Game Dialog */}
      <GameDialog showGame={showGame} setShowGame={setShowGame} />

      <CalendlyWidget />

      </main>
     
    </div>
    </>
  );
}
