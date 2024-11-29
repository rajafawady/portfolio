import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Container,
  Star,
  Trophy,
  Sword,
  Shield,
  Scroll,
  Flame,
  X,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

interface Skill {
  name: string;
  proficiency: number;
  years: number;
  description?: string;
  unlocked?: boolean;
}

interface QuestProps {
  skills: {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    devops: Skill[];
  };
}

const SkillMap = ({ skills }: QuestProps) => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [hoveredQuest, setHoveredQuest] = useState<string | null>(null);

  const paths = {
    frontend: {
      title: "Interface Treasures",
      icon: Layout,
      questIcon: Sword,
      description: "Discover the riches of user interface crafting",
      level: 1
    },
    backend: {
      title: "Server Sanctuary",
      icon: Server,
      questIcon: Shield,
      description: "Navigate the depths of server architecture",
      level: 2
    },
    database: {
      title: "Data Dragon's Lair",
      icon: Database,
      questIcon: Scroll,
      description: "Guard the ancient wisdom of data",
      level: 4
    },
    devops: {
      title: "Infrastructure Island",
      icon: Container,
      questIcon: Flame,
      description: "Chart the seas of deployment",
      level: 3
    }
  };
  
  
  const QuestDetails = ({ pathKey }: { pathKey: keyof typeof paths }) => {
    const pathSkills = skills[pathKey];
    const path = paths[pathKey];
    const QuestIcon = path.questIcon;
  
    return (
      <div className="fixed inset-0 bg-black/70 dark:bg-black/90 z-50 flex items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white dark:bg-black/80 backdrop-blur-lg rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative border border-purple-500/30 dark:border-purple-500/20"
        >
          <button
            onClick={() => setSelectedPath(null)}
            className="absolute p-2 top-2 right-2 text-gray-900 dark:text-white hover:text-purple-300 dark:hover:text-purple-500 flex items-center gap-2 z-10"
          >
            <X />
          </button>
  
          <div className="p-4 md:p-8 bg-white dark:bg-black/80">
            <div className="flex items-center gap-4 mb-4 mt-8 md:mt-0">
              <QuestIcon className="w-6 h-6 md:w-8 md:h-8 text-purple-500 dark:text-purple-300" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{path.title}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 font-serif text-sm md:text-base">{path.description}</p>
          </div>
  
          <div className="p-4 md:p-8 space-y-4 md:space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-thumb-purple-400 dark:scrollbar-thumb-purple-500/40 scrollbar-track-transparent hover:scrollbar-thumb-purple-400">
            {pathSkills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative"
              >
                <Card className="border border-purple-500/30 dark:border-purple-500/20 bg-white/10 dark:bg-black/15 backdrop-blur-lg overflow-hidden">
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-purple-300">{skill.name}</h3>
                        <div className="relative w-full">
                          <div className="absolute inset-0 bg-gray-500/20 rounded-full h-2"> {/* Unfilled area */}
                          </div>
                          <Progress 
                            value={skill.proficiency} 
                            className="h-2 bg-purple-500 rounded-full" // Filled area
                          />
                        </div>
                      </div>
                      <Trophy className="w-5 h-5 md:w-6 md:h-6 ttext-gray-900 dark:text-purple-300" />
                    </div>
                    {skill.description && (
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{skill.description}</p>
                    )}
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="flex gap-1">
                        {Array(5).fill(0).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 md:w-4 md:h-4 ${
                              i < skill.proficiency / 2
                                ? 'text-purple-500 fill-purple-500 dark:text-purple-300 dark:fill-purple-300'
                                : 'text-purple-500/20 dark:text-purple-500/20'
                            }`}
                          />
                        ))}
                      </div>
                      <Badge className="bg-purple-500/20 dark:bg-purple-500/20 text-purple-500 dark:text-purple-300 text-xs md:text-sm">
                        {skill.years}y exp
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  };
  

  return (
    <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-8 w-full m-auto">
      <div className="relative w-full max-w-3xl aspect-[16/9] mx-auto mt-[40%] md:mt-0 lg:mt-0">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
        >
          {/* Rectangle Border */}
          <rect 
            x="5" 
            y="5" 
            width="90" 
            height="90" 
            fill="none" 
            className="stroke-purple-500/30" 
            strokeWidth="0.5"
          />
          
          {/* Diagonal Lines */}
          <path
            d="M5,5 L95,95 M95,5 L5,95"
            className="stroke-purple-500/30"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="4,4"
          />
        </svg>
  
        {Object.entries(paths).map(([pathKey, path]) => {
          const PathIcon = path.icon;
          const isPathKey = pathKey as keyof typeof paths;
          
          // Define corner positions
          const positionMap: Record<string, string> = {
            frontend: "top-[-30px] left-0",
            backend: "top-[-30px] right-0",
            database: "bottom-[-30px] right-0",
            devops: "bottom-[-30px] left-0"
          };
  
          return (
            <motion.div
              key={pathKey}
              className={`absolute ${positionMap[pathKey]} transform -translate-x-1/2 -translate-y-1/2`}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-col items-center space-y-2">
                <button
                  className="group"
                  onClick={() => setSelectedPath(isPathKey)}
                  onMouseEnter={() => setHoveredQuest(isPathKey)}
                  onMouseLeave={() => setHoveredQuest(null)}
                >
                  <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center
                    shadow-lg border border-purple-500 dark:border-purple-500/30 hover:border-purple-500 transition-all duration-300
                    hover:shadow-purple-500/20 hover:shadow-xl">
                    <PathIcon className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-700 dark:text-purple-300 group-hover:text-purple-400" />
                  </div>
                </button>
                <div className="text-center">
                  <h3 className="text-xs md:text-sm lg:text-lg font-bold text-gray-700 dark:text-white font-serif whitespace-nowrap">
                    {path.title}
                  </h3>
                  <Badge className="bg-purple-500 dark:bg-purple-500/20 text-white dark:text-purple-300 text-[0.6rem] md:text-xs lg:text-sm">
                    Level {path.level}
                  </Badge>
                </div>
              </div>
            </motion.div>
          );
        })}
        
        {selectedPath && <QuestDetails pathKey={selectedPath as keyof typeof paths} />}
      </div>
    </div>
  );
};

export { SkillMap };