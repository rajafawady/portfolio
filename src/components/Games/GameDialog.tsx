import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import {MemoryGame} from './MemoryGame';

interface GameDialogProps {
  showGame: boolean;
  setShowGame: (open: boolean) => void;
}

const GameDialog: React.FC<GameDialogProps> = ({ showGame, setShowGame }) => {
  return (
    <Dialog open={showGame} onOpenChange={(open: boolean) => setShowGame(open)}>
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
  );
};

export {GameDialog};
