import { SkillMap } from '@/components/Skills/SkillTree';
import { userData } from '@/data/userData';

export default function SkillsPage() {
  return (
    <div className="text-center py-3">
      {/* Terminal Style Heading */}
      <h2 className="text-4xl font-mono font-extrabold text-gray-900 dark:text-green-500 bg-transparent border-b-2 border-gray-900 dark:border-green-500 dark:glow-text mb-8 w-fit m-auto mt-5">
        Skills
      </h2>
      <SkillMap skills={userData.skills} />
    </div>
  );
}
