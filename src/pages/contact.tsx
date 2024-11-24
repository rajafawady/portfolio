import { ContactCard } from '@/components/Contact/ContactCard';
import { userData } from '@/data/userData';

export default function ContactPage() {
  return (
    <div className="text-center text-gray-500">
      <h2 className="text-xl font-semibold mb-4">Contact Me</h2>
      <ContactCard contact={userData.contact} />
    </div>
  );
}
