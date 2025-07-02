import { ContactCard } from '@/components/Contact/ContactCard';
import { userData } from '@/data/userData';

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center m-auto items-center">
      {/* Terminal Style Heading */}
      <div className="w-full mb-8 mt-5 px-4">
        <h2 className="text-4xl font-mono font-extrabold text-gray-900 dark:text-green-500 bg-gray-100 dark:bg-gray-950 border-l-4 border-gray-900 dark:border-green-500 dark:glow-text p-3 rounded-r-md shadow-md backdrop-blur-sm">
          <span className="text-gray-500 dark:text-green-400 mr-2">$</span>
          Get In Touch
          <span className="inline-block w-3 h-5 ml-2 bg-gray-900 dark:bg-green-500 animate-pulse"></span>
        </h2>
      </div>
      <ContactCard contact={userData.contact} />
    </div>
  );
}
