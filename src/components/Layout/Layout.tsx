import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Navigation/Sidebar';
import { MatrixRain } from '@/components/Effects/MatrixRain';
import { useTheme } from '@/hooks/useTheme';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode; // Content that will change based on routing
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [matrixMode, setMatrixMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Render MatrixRain only on the client side */}
      {isClient && matrixMode && <MatrixRain />}
      <Sidebar />
      <main className="ml-16 p-8">
        <div className="max-w-6xl mx-auto">
          {children} {/* This renders the current page content */}
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2">
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
                >
                  🎮
                </motion.button>
              )}
            </TooltipTrigger>
            <TooltipContent sideOffset={4}>Play Game</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
