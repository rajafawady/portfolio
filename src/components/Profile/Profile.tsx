import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { CodeXml, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useRouter } from 'next/router';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface ProfileProps {
  user: {
    name: string;
    title: string;
    about: {
      summary: string;
      details: string[];
      interests: string[];
    };
    experience: {
      company: string;
      position: string;
      period: string;
      highlights: string;
    }[];
    education: {
      degree: string;
      institution: string;
      year: string;
      achievements: string[];
    }[];
    skills: {
      frontend: { name: string; level: number; years: number; icon: string; proficiency: number }[];
      backend: { name: string; level: number; years: number; icon: string; proficiency: number }[];
      database: { name: string; level: number; years: number; icon: string; proficiency: number }[];
      devops: { name: string; level: number; years: number; icon: string; proficiency: number }[];
    };
    contact: {
      email: string;
      phone: string;
      location: string;
    };
    availability: {
      status: string;
      preferences: string[];
      rate: string;
    };
  };
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [selectedTab, setSelectedTab] = useState('about');
  const [isContactVisible, setIsContactVisible] = useState(false);
  const router= useRouter();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="relative flex flex-col md:flex-row items-center md:items-start gap-8 bg-white/10 border-2 dark:border-0 dark:bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8"

        >
          <div 
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <Avatar className="w-full h-full ring-4 ring-purple-500 ring-offset-4 ring-offset-transparent">
              <Zoom>
              <AvatarImage src="/fawad.jpg" alt="Profile" className="object-cover" />
              </Zoom>
              <AvatarFallback className="bg-purple-500 text-4xl text-white">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute right-[43%] transform translate-x-1/4">
              <Badge className="bg-green-500 text-white px-3 py-1">
                {user.availability.status}
              </Badge>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-300 mb-2"
              variants={itemVariants}
            >
              {user.name}
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-purple-500 dark:text-green-500 mb-4"
              variants={itemVariants}
            >
              {user.title}
            </motion.h2>
            <motion.p 
              className="text-gray-700 dark:text-gray-300 max-w-2xl mb-6"
              variants={itemVariants}
            >
              {user.about.summary}
            </motion.p>
            <motion.div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                onClick={() => setIsContactVisible(!isContactVisible)}
                className="group text-gray-900 dark:text-gray-300 border-purple-500 hover:bg-purple-500"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Info
              </Button>
              <Button variant="outline" className="text-gray-900 dark:text-gray-300 border-purple-500 hover:bg-purple-500" onClick={()=>router.push('/contact')}>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
  {isContactVisible && (
    <motion.div
      initial={{ opacity: 0, scaleY: 0 }}
      animate={{ opacity: 1, scaleY: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, scaleY: 0, transition: { duration: 0.3, ease: "easeIn" } }}
      style={{ originY: 0 }}
      className="mt-4 bg-white/10 border-2 dark:border-0 dark:bg-gray-900/10 backdrop-blur-lg rounded-xl p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
          <Mail className="h-5 w-5 text-purple-400" />
          <span>{user.contact.email}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
          <Phone className="h-5 w-5 text-purple-400" />
          <span>{user.contact.phone}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-900 dark:text-gray-300">
          <MapPin className="h-5 w-5 text-purple-400" />
          <span>{user.contact.location}</span>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>


        {/* Main Content Tabs */}
        <Tabs 
          defaultValue="experience" 
          className="mt-8"
          onValueChange={setSelectedTab}
        >
          <TabsList className="w-full justify-center lg:justify-start bg-white/10 border-2 dark:border-0 dark:bg-white/10 backdrop-blur-lg p-1 rounded-xl">
            <TabsTrigger
              value="experience"
              className="text-gray-900 dark:text-gray-300 data-[state=active]:bg-gray-200 data-[state=active]:dark:bg-green-600 data-[state=active]:text-purple-600 data-[state=active]:dark:text-white rounded-lg px-3 py-2 transition-colors"
            >
              <Briefcase className="mr-2 h-4 w-4 text-purple-400 dark:text-white" />
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="text-gray-900 dark:text-gray-300 data-[state=active]:bg-gray-200 data-[state=active]:dark:bg-green-600 data-[state=active]:text-purple-600 data-[state=active]:dark:text-white rounded-lg px-3 py-2 transition-colors"
            >
              <GraduationCap className="mr-2 h-4 w-4 text-purple-400 dark:text-white" />
              Education
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="text-gray-900 dark:text-gray-300 data-[state=active]:bg-gray-200 data-[state=active]:dark:dark:bg-green-600 data-[state=active]:text-purple-600 data-[state=active]:dark:text-white rounded-lg px-3 py-2 transition-colors"
            >
              <CodeXml className="mr-2 h-4 w-4 text-purple-400 dark:text-white" />
              Skills
            </TabsTrigger>
          </TabsList>


          <TabsContent value="experience" className="mt-6">
            <motion.div 
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {user.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 border-gary-900 border-2 dark:border-0 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-semibold text-purple-500 dark:text-green-500">{exp.position}</h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-900 dark:text-gray-300">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                    <span className="text-purple-400">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="mt-4 text-gray-900 dark:text-gray-300">{exp.highlights}</p>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="mt-6">
            <motion.div 
              className="grid gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {user.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 border-gary-900 border-2 dark:border-0 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-semibold text-purple-500 dark:text-green-500">{edu.degree}</h3>
                  <div className="flex items-center gap-2 mt-2 text-gray-900 dark:text-gray-300">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.institution}</span>
                    <span className="text-purple-400">•</span>
                    <span>{edu.year}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-900 dark:text-gray-300 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="mt-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Object.entries(user.skills).map(([category, skills]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="bg-white/10 border-gary-900 border-2 dark:border-0 dark:bg-white/10 backdrop-blur-lg rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-purple-500 dark:text-green-500 mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills.map((skill, idx) => (
                      <div key={idx} className="space-y-2">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2 text-gray-900 dark:text-gray-300">
                            <span className="text-xl">{skill.icon}</span>
                            <span>{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-900 dark:text-gray-300">{skill.years} years</span>
                        </div>
                        <div className="relative w-full">
                          <div className="absolute inset-0 bg-gray-500/20 rounded-full h-2"> {/* Unfilled area */}
                          </div>
                          <Progress 
                            value={skill.proficiency} 
                            className="h-2 bg-purple-500 rounded-full" // Filled area
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export {Profile};