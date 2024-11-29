import { CommandGroups } from "@/components/Terminal/types";

export const terminalCommands: CommandGroups = {
  basic: {
    help: { desc: "Shows available commands", category: "system" },
    clear: { desc: "Clears the terminal", category: "system" },
    stats: { desc: "View portfolio statistics", category: "system" },
    about: { desc: "Display information about me", category: "navigation" },
    skills: { desc: "List technical skills", category: "navigation" },
    projects: { desc: "View portfolio projects", category: "navigation" },
    contact: { desc: "Show contact information", category: "navigation" },
    
  },
  advanced: {
    game: { desc: "Launch mini-game", category: "entertainment" },
    theme: { desc: "Toggle dark/light mode", category: "customization" },
    matrix: { desc: "Toggle matrix effect", category: "entertainment" },
    
  },
  fun: {
    coffee: { desc: "Here’s your coffee! ☕", category: "fun" },
    rickroll: { desc: "Never gonna give you up, never gonna let you down...", category: "fun" },
    joke: { desc: "Fetch a random dad joke", category: "fun" },
    catfact: { desc: "Get random cat facts", category: "fun" },  // New command for cat facts
    quote: { desc: "Get a random motivational quote", category: "fun" },  
  }
};
