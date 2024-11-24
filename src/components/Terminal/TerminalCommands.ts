export const terminalCommands = {
    help: { desc: 'Shows available commands', action: 'showHelp' },
    about: { desc: 'Display information about me', action: 'navigateToAbout' },
    skills: { desc: 'List my technical skills', action: 'navigateToSkills' },
    projects: { desc: 'View my portfolio projects', action: 'navigateToProjects' },
    education: { desc: 'Show my educational background', action: 'navigateToEducation' },
    contact: { desc: 'Display contact information', action: 'navigateToContact' },
    clear: { desc: 'Clear terminal history', action: 'clearTerminal' },
    achievements: { desc: 'View unlocked achievements', action: 'showAchievements' },
    game: { desc: 'Play a mini-game', action: 'startGame' },
    theme: { desc: 'Toggle dark/light mode', action: 'toggleTheme' },
    matrix: { desc: 'Enable matrix mode', action: 'toggleMatrix' }
  };