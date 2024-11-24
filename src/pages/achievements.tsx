import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useAchievements } from '@/hooks/useAchievements';

export default function AchievementsPage() {
  const { achievements } = useAchievements();

  return (
    <div className="grid gap-4">
      {achievements.map((achievement) => (
        <Alert key={achievement.id} className="achievement-card" icon={achievement.icon}>
          <AlertTitle>{achievement.name}</AlertTitle>
          <AlertDescription>{achievement.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}
