export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    image: string;
    category: 'web' | 'mobile';
    tags: string[];
    liveUrl?: string;
    githubUrl: string;
    highlights: string[];
    featured: boolean;
  }
  
  export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    xpValue: number;
    unlocked: boolean;
  }
  
  export interface Skill {
    name: string;
    category: string;
    proficiency: number;
    icon: string;
    color: string;
  }