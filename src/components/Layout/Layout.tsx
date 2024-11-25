import { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Navigation/Sidebar';
import { MatrixRain } from '@/components/Effects/MatrixRain';
import { useTheme } from '@/hooks/useTheme';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose, DialogDescription } from '@/components/ui/dialog';
import { MemoryGame } from '@/components/Games/MemoryGame';
import { ReactNode } from 'react';
import {X} from 'lucide-react';

interface LayoutProps {
  children: ReactNode; // Content that will change based on routing
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [matrixMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [showGame, setShowGame] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' : 'bg-white text-black'}`}>
      {/* Render MatrixRain only on the client side */}
      {isClient && matrixMode && <MatrixRain />}
      <Sidebar />
      <main className="ml-16 ">
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
      <Dialog open={showGame} onOpenChange={(open) => setShowGame(open)}>
  <DialogContent className="p-4 lg:p-8 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <DialogHeader className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <div className="flex-1">
        <DialogTitle className="text-lg md:text-xl font-semibold text-purple-500 dark:text-purple-300">
          Memory Game
        </DialogTitle>
        <DialogDescription className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Match pairs of cards to test your memory.
        </DialogDescription>
      </div>
    </DialogHeader>

    {/* Game Component */}
    <div className="mt-4">
      <MemoryGame onWin={() => {}} />
    </div>
  </DialogContent>
</Dialog>
      </main>
     
    </div>
  );
}
