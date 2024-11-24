import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Briefcase, Code2, Mail, Award } from 'lucide-react';
import { useRouter } from 'next/router';



export const Sidebar: React.FC= () => {
  const router = useRouter();

  const sections = [
    { id: 'terminal', icon: <Terminal size={24} />, label: 'Terminal', path: '/' },
    { id: 'profile', icon: <User size={24} />, label: 'About Me', path: '/profile' },
    { id: 'projects', icon: <Briefcase size={24} />, label: 'Projects', path: '/projects' },
    { id: 'skills', icon: <Code2 size={24} />, label: 'Skills', path: '/skills' },
    { id: 'contact', icon: <Mail size={24} />, label: 'Contact', path: '/contact' },
    { id: 'achievements', icon: <Award size={24} />, label: 'Achievements', path: '/achievements' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-16 bg-gray-800 flex flex-col items-center py-4 space-y-4">
      {sections.map((section) => (
        <motion.button
          key={section.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push(section.path)} // Use Next.js router to change routes
          className={`p-3 rounded-lg ${
            router.pathname === section.path ? 'bg-blue-600' : 'hover:bg-gray-700'
          }`}
        >
          <span className="text-white">{section.icon}</span>
        </motion.button>
      ))}
    </nav>
  );
};
