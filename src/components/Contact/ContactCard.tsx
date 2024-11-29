import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Phone, MapPin } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

interface ContactCardProps {
  contact: {
    email: string;
    phone: string;
    location: string;
    social: {
      github: string;
      linkedin: string;
      upwork: string;
    };
  };
}

export const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const { email, phone, location, social } = contact;

  const contacts = [
      { label: 'GitHub', icon: Github, link: social.github, color: 'text-gray-400' },
      { label: 'LinkedIn', icon: Linkedin, link: social.linkedin, color: 'text-blue-600' },
      { label: 'Upwork', icon: ExternalLink, link: social.upwork, color: 'text-green-400' },
      { label: email, icon: Mail, link: `mailto:${email}`, color: 'text-blue-400' },
  ];

  return (
    <TooltipProvider>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg  mx-auto space-y-6 mb-4">
        <div className="grid grid-cols-1 gap-6">
          {contacts.map(({ label, icon: Icon, link, color }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                  <Icon size={24} className={`${color} transition-colors`} />
                  <span className="font-medium text-white">{label}</span>
                </motion.a>
              </TooltipTrigger>
              <TooltipContent side="top" className="bg-gray-800 text-white p-2 rounded-md">
                Go to {label}
              </TooltipContent>
            </Tooltip>
          ))}

          {/* Non-clickable phone and location */}
          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
            <Phone size={24} className="text-green-400" />
            <span className="font-medium text-white">{phone}</span>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
            <MapPin size={24} className="text-gray-500" />
            <span className="font-medium text-white">{location}</span>
          </div>

          {/* CTA Button for WhatsApp */}
          <motion.a
            href={`https://wa.me/${phone.replace(/\s/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-4 bg-green-500 hover:bg-green-400 text-white rounded-lg w-full transition-all transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-medium">Contact me on WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </TooltipProvider>
  );
};
