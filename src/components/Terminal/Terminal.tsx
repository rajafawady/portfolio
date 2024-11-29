import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { TerminalEntry, TerminalProps } from './types';
import { terminalCommands } from '@/data/terminal';
import { TerminalCommand } from './types';
import { useRouter } from 'next/router';
import {userData} from '@/data/userData';
import {projects} from '@/data/projects';
import { useGame } from '@/context/GameContext';


export const Terminal: React.FC<TerminalProps> = ({
  onCommand,
  onThemeToggle,
  onMatrixToggle,
  className
}) => {
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const { showGame, setShowGame } = useGame();
  const router= useRouter();


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedHistory = localStorage.getItem('commandHistory');
      if (savedHistory) {
        try {
          const parsedHistory = JSON.parse(savedHistory);
          if (Array.isArray(parsedHistory)) {
            setCommandHistory(parsedHistory);
          }
        } catch (error) {
          console.error('Failed to parse command history:', error);
        }
      }
    }
  }, []);


  const addEntry = (content: string, type: TerminalEntry['type'] = 'output') => {
    setEntries((prev) => [
      ...prev,
      {
        id: nanoid(),
        type,
        content,
        timestamp: Date.now(),
      },
    ]);
  };

  const findCommand = (cmd: string): [TerminalCommand | undefined, string | undefined] => {
    for (const [group, commands] of Object.entries(terminalCommands)) {
      if (cmd in commands) {
        return [commands[cmd], group];
      }
    }
    return [undefined, undefined];
  };


  const handleSpecialCommands = (command: string) => {
    switch (command) {
      case 'clear':
        setEntries([]);
        return true;
      case 'help':
        const helpText = Object.entries(terminalCommands).map(([group, commands]) => {
          const commandList = Object.entries(commands as Record<string, TerminalCommand>)
            .map(([cmd, info]) => `  ${cmd.padEnd(12)} - ${(info as TerminalCommand).desc}`)
            .join('\n');
          return `${group.toUpperCase()}:\n${commandList}`;
        }).join('\n\n');
        addEntry(`Available commands:\n\n${helpText}`);
        return true;
      case 'theme':
        onThemeToggle?.();
        addEntry('Theme toggled!');
        return true;
      case 'matrix':
        onMatrixToggle?.();
        addEntry('Matrix effect toggled!');
        return true;
      case 'game':
        setShowGame(true);
        addEntry('Lets Play!');
        return true;
        case 'stats':
          const userStats = generateStats();
          addEntry(userStats);
          return true;
      default:
        return false;
    }
  };

  const handleCommand = async (command: string) => {
    // Add command to history
    setCommandHistory((prev) => {
      if (command !== prev[0]) {
        const history = [command, ...prev];
        if (typeof window !== 'undefined') {
          localStorage.setItem('commandHistory', JSON.stringify(history));
        }
        return history;
      }
      return prev;
    });
    setHistoryIndex(-1);

    addEntry(command, 'command');

    const trimmedCommand = command.trim().toLowerCase();

    if (handleSpecialCommands(trimmedCommand)) {
      return;
    }

    // Find command in command groups
    const [commandObj] = findCommand(trimmedCommand);

    if (commandObj) {
      // Handle category-specific responses
      switch (commandObj.category) {
        case 'fun':
          if (trimmedCommand === 'joke') {
            const joke=await getJoke();
            addEntry(joke);
          } else if (trimmedCommand === 'catfact') {
            const catFact=await getCatFact();
            addEntry(catFact);
          } else if (trimmedCommand === 'quote') {
            const quote = await getRandomQuote();
            addEntry(quote);
          } else {
            addEntry(commandObj.desc, 'fun');
          }
          break;
        case 'system':
          addEntry(`System command: ${commandObj.desc}`);
          break;
        case 'navigation':
          // Use router for navigation
          if (trimmedCommand === 'about') {
            addEntry('Navigating to About Me page...');
            router.push('/profile');
          } else if (trimmedCommand === 'skills') {
            addEntry('Navigating to Skills page...');
            router.push('/skills');
          } else if (trimmedCommand === 'projects') {
            addEntry('Navigating to Projects page...');
            router.push('/projects');
          } else if (trimmedCommand === 'contact') {
            addEntry('Navigating to Contact page...');
            router.push('/contact');
          }
          break;
        case 'entertainment':
          addEntry(`Loading ${trimmedCommand}...`);
          break;
        case 'customization':
          addEntry(`Applying ${trimmedCommand} settings...`);
          break;
      }
    } else {
      addEntry(`Command not found: ${command}. Type 'help' for available commands.`, 'error');
    }

    // Notify parent component
    onCommand?.(command);
  };

  const handleHistoryNav = (direction: 'up' | 'down') => {
    if (direction === 'up' && historyIndex < commandHistory.length - 1) {
      setHistoryIndex(prev => prev + 1);
    } else if (direction === 'down' && historyIndex > -1) {
      setHistoryIndex(prev => prev - 1);
    }
  };


  const generateStats = () => {
    // User stats from userData
    const userName = userData.name || 'N/A';
    const userEmail = userData.contact.email || 'N/A';
  
    // Project stats from projects
    const totalProjects = projects.length;
    const webProjects = projects.filter((project) => project.category === 'web').length;
    const appProjects = projects.filter((project) => project.category === 'mobile').length;
  
    // Format the stats message
    return `
      USER STATS:
      Name: ${userName}
      Email: ${userEmail}
  
      PROJECT STATS:
      Total Projects: ${totalProjects}
      Web Development Projects: ${webProjects}
      App Development Projects: ${appProjects}
    `;
  };

  const getJoke = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'bYULVoaIKgMN+fscclr0fQ==sG55msNm7r4TZskr'
        }
      });

      const data = await response.json();

      if (data && data.length > 0) {
        return(data[0].joke);
      } else {
        return('Sorry, I couldn\'t find a joke for you right now.');
      }
    } catch (error) {
      return 'Error fetching quote. Please try again later.';
    }
  };


  const getCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();

      if (data && data.fact) {
        return(`Cat fact: ${data.fact}`);
      } else {
        return('Sorry, I couldn\'t retrieve a cat fact right now.');
      }
    } catch (error) {
      return 'Error fetching quote. Please try again later.';
    }
  };

  const getRandomQuote = async () => {
    // List of categories to choose from
    const categories = ['change', 'failure', 'great', 'inspirational', 'learning', 'success'];
  
    // Choose a random category
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  
    try {
      // Make the API request to fetch a quote from the chosen category
      const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${randomCategory}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'bYULVoaIKgMN+fscclr0fQ==sG55msNm7r4TZskr', // Add your API key here
        },
      });
  
      // Check if the response is ok
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // If no quotes are returned, handle it gracefully
      if (data.length === 0) {
        return 'Sorry, no quote available right now.';
      }
  
      // Get the first quote from the response
      const quote = data[0];
  
      // Return the quote and the author
      return `"${quote.quote}" - ${quote.author}`;
  
    } catch (error) {
      // Handle any errors that occur during the API call
      console.error('Error fetching quote:', error);
      return 'Error fetching quote. Please try again later.';
    }
  };
  

  // Auto-scroll to bottom when new entries are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <div 
      className={`text-green-400 p-4 overflow-y-auto h-screen ${className}`}
      ref={containerRef}
    >
      <div className={`font-mono text-blue-400`}>
        <span className="whitespace-pre-wrap">$ Welcome to my portfolio! Type &ldquo;help&rdquo; for available commands.</span>
      </div>
      <div className="space-y-2">
        {entries.map(entry => (
          <TerminalOutput
            key={entry.id}
            type={entry.type}
            content={entry.content}
            timestamp={entry.timestamp}
          />
        ))}
      </div>
      <TerminalInput
        onSubmit={handleCommand}
        onHistoryNav={handleHistoryNav}
        commandHistory={commandHistory}
        historyIndex={historyIndex}
        className="text-green-400"
      />
    </div>
  );
};
