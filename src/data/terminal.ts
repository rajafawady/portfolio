import { CommandGroups } from "@/components/Terminal/types";

export const terminalCommands: CommandGroups = {
    basic: {
      help: { desc: "Shows available commands", category: "system" },
      clear: { desc: "Clears the terminal", category: "system" },
      about: { desc: "Display information about me", category: "navigation" },
      skills: { desc: "List technical skills", category: "navigation" },
      projects: { desc: "View portfolio projects", category: "navigation" },
      contact: { desc: "Show contact information", category: "navigation" }
    },
    advanced: {
      game: { desc: "Launch mini-game", category: "entertainment" },
      theme: { desc: "Toggle dark/light mode", category: "customization" },
      matrix: { desc: "Toggle matrix effect", category: "entertainment" },
      stats: { desc: "View portfolio statistics", category: "system" },
      achievement: { desc: "View achievements", category: "system" }
    },
    easter_eggs: {
      coffee: { desc: "☕", category: "fun" },
      rickroll: { desc: "Never gonna give you up", category: "fun" },
      konami: { desc: "⬆⬆⬇⬇⬅➡⬅➡BA", category: "fun" }
    }
  };