import { ContactCard } from '@/components/Contact/ContactCard';
import { userData } from '@/data/userData';

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center m-auto items-center">
      {/* Terminal Style Heading */}
      <h2 className="text-4xl font-mono font-extrabold text-gray-900 dark:text-green-500 bg-transparent border-b-2 border-gray-900 dark:border-green-500 dark:glow-text mb-8 mt-20 md:mt-5 p-2">
        Get In Touch
      </h2>
      <ContactCard contact={userData.contact} />
    </div>
  );
}
