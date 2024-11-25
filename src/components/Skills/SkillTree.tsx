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
      position: {
        desktop: "top-[10%] left-[10%]", 
        tablet: "top-[15%] left-[20%]",
        mobile: "top-[5%] left-[15%]"
      },
      questIcon: Sword,
      description: "Discover the riches of user interface crafting",
      level: 1
    },
    backend: {
      title: "Server Sanctuary",
      icon: Server,
      position: {
        desktop: "top-[10%] right-[10%]", 
        tablet: "top-[15%] right-[20%]",
        mobile: "top-[5%] right-[15%]"
      },
      questIcon: Shield,
      description: "Navigate the depths of server architecture",
      level: 2
    },
    database: {
      title: "Data Dragon's Lair",
      icon: Database,
      position: {
        desktop: "bottom-[10%] right-[10%]",
        tablet: "bottom-[15%] right-[20%]",
        mobile: "bottom-[5%] right-[15%]"
      },
      questIcon: Scroll,
      description: "Guard the ancient wisdom of data",
      level: 4
    },
    devops: {
      title: "Infrastructure Island",
      icon: Container,
      position: {
        desktop: "bottom-[10%] left-[10%]", 
        tablet: "bottom-[15%] left-[20%]",
        mobile: "bottom-[5%] left-[15%]"
      },
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
    <div className="min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
        <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-[2/1] mx-auto">
          {/* Responsive SVG paths */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Desktop/Tablet Grid */}
            <g className="hidden md:block">
              {/* Horizontal Lines */}
              <path
                d="M25,25 L75,25"
                className="stroke-purple-500/30"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M25,75 L75,75"
                className="stroke-purple-500/30"
                strokeWidth="0.5"
                fill="none"
              />
              {/* Vertical Lines */}
              <path
                d="M25,25 L25,75"
                className="stroke-purple-500/30"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M75,25 L75,75"
                className="stroke-purple-500/30"
                strokeWidth="0.5"
                fill="none"
              />
              {/* Diagonal Lines */}
              <path
                d="M25,25 L75,75 M75,25 L25,75"
                className="stroke-purple-500/30"
                strokeWidth="0.5"
                fill="none"
                strokeDasharray="4,4"
              />
            </g>
            {/* Mobile vertical path */}
            <path
              className="block md:hidden stroke-purple-500/30"
              d="M50,10 L50,90"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="4,4"
            />
          </svg>

          {Object.entries(paths).map(([pathKey, path]) => {
            const PathIcon = path.icon;
            const isPathKey = pathKey as keyof typeof paths;

            return (
              <motion.div
                key={pathKey}
                className={`absolute ${path.position.mobile} md:${path.position.tablet} lg:${path.position.desktop} transform -translate-x-1/2 -translate-y-1/2`}
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
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center
                      shadow-lg border border-purple-500 dark:border-purple-500/30 hover:border-purple-500 transition-all duration-300
                      hover:shadow-purple-500/20 hover:shadow-xl">
                      <PathIcon className="w-6 h-6 md:w-8 md:h-8 text-gray-700 dark:text-purple-300 group-hover:text-purple-400" />
                    </div>
                  </button>
                  <div className="text-center">
                    <h3 className="text-sm md:text-lg font-bold text-gray-700 dark:text-white font-serif whitespace-nowrap">
                      {path.title}
                    </h3>
                    <Badge className="bg-purple-500 dark:bg-purple-500/20 text-white dark:text-purple-300 text-xs md:text-sm">
                      Level {path.level}
                    </Badge>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {selectedPath && <QuestDetails pathKey={selectedPath as keyof typeof paths} />}
    </div>
  );
};

export { SkillMap };