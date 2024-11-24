import { Profile } from '@/components/Profile/Profile';
import { userData } from '@/data/userData';

export default function ProfilePage() {
  return <Profile user={userData} />;
}
