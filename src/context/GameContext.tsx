import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GameContextType {
  showGame: boolean;
  setShowGame: (open: boolean) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [showGame, setShowGame] = useState(false);

  return (
    <GameContext.Provider value={{ showGame, setShowGame }}>
      {children}
    </GameContext.Provider>
  );
};
