export const achievements = [
    {
      id: "explorer",
      name: "Explorer",
      description: "Visited all sections of the portfolio",
      icon: "🌟",
      xpValue: 100,
      requirements: {
        visitedSections: ["about", "projects", "skills", "contact"]
      }
    },
    {
      id: "terminal_master",
      name: "Terminal Master",
      description: "Used 10 different terminal commands",
      icon: "💻",
      xpValue: 150,
      requirements: {
        commandsUsed: 10
      }
    },
    {
      id: "game_master",
      name: "Game Master",
      description: "Won all mini-games",
      icon: "🎮",
      xpValue: 200,
      requirements: {
        gamesWon: ["memory", "typing", "puzzle"]
      }
    },
    {
      id: "code_reviewer",
      name: "Code Reviewer",
      description: "Viewed source code of 5 projects",
      icon: "🔍",
      xpValue: 100,
      requirements: {
        projectsViewed: 5
      }
    },
    {
      id: "networker",
      name: "Professional Networker",
      description: "Visited all social links",
      icon: "🤝",
      xpValue: 75,
      requirements: {
        socialLinksVisited: ["github", "linkedin", "upwork"]
      }
    },
    {
      id: "matrix",
      name: "Matrix Explorer",
      description: "Discovered the matrix Easter egg",
      icon: "🕶️",
      xpValue: 150,
      requirements: {
        matrixActivated: true
      }
    }
  ];