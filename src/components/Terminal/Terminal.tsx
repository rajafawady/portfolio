import React, { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { TerminalInput } from './TerminalInput';
import { TerminalOutput } from './TerminalOutput';
import { TerminalEntry, TerminalProps } from './types';
import { terminalCommands } from '@/data/terminal';
import { TerminalCommand } from './types';


export const Terminal: React.FC<TerminalProps> = ({
  onCommand,
  onThemeToggle,
  onMatrixToggle,
  className
}) => {
  const [entries, setEntries] = useState<TerminalEntry[]>([
    {
      id: nanoid(),
      type: 'system',
      content: 'Welcome to my interactive portfolio! Type "help" for available commands.',
      timestamp: Date.now()
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const addEntry = (content: string, type: TerminalEntry['type'] = 'output') => {
    setEntries(prev => [...prev, {
      id: nanoid(),
      type,
      content,
      timestamp: Date.now()
    }]);
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
      default:
        return false;
    }
  };

  const handleCommand = (command: string) => {
    // Add command to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // Add command entry
    addEntry(command, 'command');

    // Process command
    const trimmedCommand = command.trim().toLowerCase();

    // Handle special commands first
    if (handleSpecialCommands(trimmedCommand)) {
      return;
    }

    // Find command in command groups
    const [commandObj] = findCommand(trimmedCommand);

    if (commandObj) {
      // Handle category-specific responses
      switch (commandObj.category) {
        case 'fun':
          addEntry(commandObj.desc, 'fun');
          break;
        case 'system':
          addEntry(`System command: ${commandObj.desc}`);
          break;
        case 'navigation':
          addEntry(`Navigating to ${trimmedCommand}...`);
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

  // Auto-scroll to bottom when new entries are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [entries]);

  return (
    <div 
  className={`bg-gray-900 text-green-400 p-4 rounded-lg overflow-y-auto h-96 ${className}`}
  ref={containerRef}
>
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
    className="text-green-400"
  />
</div>

  );
};