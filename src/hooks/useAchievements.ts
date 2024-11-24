// src/hooks/useAchievements.ts
import { useState } from 'react';
import { achievements as achievementsData } from '@/data/achievements';

export const useAchievements = () => {
  const [achievements, setAchievements] = useState(achievementsData);

  const unlockAchievement = (id: string) => {
    // Logic to unlock achievement
    setAchievements((prevAchievements) => {
      const updatedAchievements = prevAchievements.map((achievement) =>
        achievement.id === id ? { ...achievement, unlocked: true } : achievement
      );
      return updatedAchievements;
    });
  };

  return { achievements, unlockAchievement };
};
