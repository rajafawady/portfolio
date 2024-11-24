import { SkillMap } from '@/components/Skills/SkillTree';
import { userData } from '@/data/userData';

export default function SkillsPage() {
  return <SkillMap skills={userData.skills} />;
}
