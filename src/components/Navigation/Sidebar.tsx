"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Briefcase, Code2, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sections = [
    { id: 'terminal', icon: <Terminal size={24} />, label: 'Terminal', path: '/' },
    { id: 'profile', icon: <User size={24} />, label: 'About Me', path: '/profile' },
    { id: 'skills', icon: <Code2 size={24} />, label: 'Skills', path: '/skills' },
    { id: 'projects', icon: <Briefcase size={24} />, label: 'Projects', path: '/projects' },
    { id: 'contact', icon: <Mail size={24} />, label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Sidebar Toggle Arrow for Mobile */}
      <div className="md:hidden fixed top-1/2 left-[-6px] z-50 transform -translate-y-1/2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleSidebar}
          className="h-20 rounded-md bg-gray-800 text-white"
        >
          {isSidebarOpen ? (
            <ChevronLeft size={24} /> // Arrow pointing left when sidebar is open
          ) : (
            <ChevronRight size={24} /> // Arrow pointing right when sidebar is closed
          )}
        </motion.button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-16 z-40 bg-gray-800 flex flex-col items-center py-4 space-y-4 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        {sections.map((section) => (
          <motion.button
            key={section.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => router.push(section.path)} // Use Next.js router to change routes
            className={`p-3 rounded-lg ${router.pathname === section.path ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            <span className="text-white">{section.icon}</span>
          </motion.button>
        ))}
      </nav>
    </>
  );
};
