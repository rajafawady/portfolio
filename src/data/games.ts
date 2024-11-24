export const games = {
    memory: {
      name: "Memory Match",
      description: "Match pairs of cards to test your memory",
      levels: [
        {
          id: 1,
          pairs: 6,
          timeLimit: 60,
          xpReward: 50
        },
        {
          id: 2,
          pairs: 8,
          timeLimit: 90,
          xpReward: 100
        },
        {
          id: 3,
          pairs: 12,
          timeLimit: 120,
          xpReward: 150
        }
      ]
    },
    typing: {
      name: "Speed Typing",
      description: "Test your typing speed with code snippets",
      levels: [
        {
          id: 1,
          difficulty: "easy",
          wordCount: 20,
          timeLimit: 30,
          xpReward: 50
        },
        {
          id: 2,
          difficulty: "medium",
          wordCount: 40,
          timeLimit: 45,
          xpReward: 100
        },
        {
          id: 3,
          difficulty: "hard",
          wordCount: 60,
          timeLimit: 60,
          xpReward: 150
        }
      ]
    }
  };