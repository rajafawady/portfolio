import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface TerminalInputProps {
  onSubmit: (command: string) => void;
  onHistoryNav: (direction: 'up' | 'down') => void;
  className?: string;
  commandHistory: string[]; // Command history
  historyIndex: number; // Current history index
  availableCommands?: string[]; // Available commands for tab completion
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  onSubmit,
  onHistoryNav,
  className,
  commandHistory,
  historyIndex,
  availableCommands = [],
}) => {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme } = useTheme();

  // Get command suggestions based on current input
  const getSuggestions = () => {
    if (!input.trim()) return [];
    return availableCommands.filter(cmd => 
      cmd.toLowerCase().startsWith(input.toLowerCase())
    ).slice(0, 5);
  };

  const suggestions = getSuggestions();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(input); // Submit the command
      setInput(''); // Clear the input after submitting
      setShowSuggestions(false);
      setCursorPosition(0);
    } else if (e.key === 'ArrowUp') {      
      if (commandHistory.length > 0) {
        onHistoryNav('up'); 
      }
      e.preventDefault(); 
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > -1 && commandHistory.length > 0) {
        onHistoryNav('down'); 
      }
      e.preventDefault(); 
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const firstSuggestion = suggestions[0];
      if (firstSuggestion) {
        setInput(firstSuggestion);
        setCursorPosition(firstSuggestion.length);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
    
    // Update cursor position for navigation keys
    setTimeout(updateCursorPosition, 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setCursorPosition(e.target.selectionStart || 0);
    setShowSuggestions(value.length > 0 && suggestions.length > 0);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setShowSuggestions(input.length > 0 && suggestions.length > 0);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleCursorMove = (e: React.MouseEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCursorPosition(target.selectionStart || 0);
  };

  const updateCursorPosition = () => {
    if (inputRef.current) {
      setCursorPosition(inputRef.current.selectionStart || 0);
    }
  };

  // Update the input based on the current history index
  useEffect(() => {
    if (historyIndex === -1) {
      setInput(''); // Reset input when no history is selected
      setCursorPosition(0);
    } else {
      const historyCommand = commandHistory[historyIndex] || '';
      setInput(historyCommand); // Set input to the current command in history
      setCursorPosition(historyCommand.length); // Set cursor to end of command
    }
  }, [historyIndex, commandHistory]); // Re-run when historyIndex or commandHistory changes

  // Focus the input field when component is rendered or updated
  useEffect(() => {
    inputRef.current?.focus();
    setIsFocused(true);
  }, []);

  // Hide suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowSuggestions(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div className={`flex items-center group transition-all duration-300 rounded-sm px-2 py-1.5 border border-transparent ${
        theme === 'dark' 
          ? 'hover:bg-gray-900/20 hover:border-gray-700/50' 
          : 'hover:bg-gray-100/20 hover:border-gray-300/50'
      } ${isFocused ? (theme === 'dark' ? 'ring-2 ring-green-400/30 terminal-glow' : 'ring-2 ring-green-600/30 terminal-glow-light') : ''}`}>
        <div className={`terminal-prompt font-medium select-none ${
          theme === 'dark' ? 'text-green-400' : 'text-green-600'
        }`}>
          <span className={theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'}>guest</span>
          <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>@</span>
          <span className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>portfolio</span>
          <span className={`mx-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>:</span>
          <span className={theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}>~</span>
          <motion.span
            animate={{ opacity: [0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className={`ml-1 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}
          >
            $
          </motion.span>
        </div>
        <div className="flex-1 relative ml-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onClick={handleCursorMove}
            onKeyUp={handleCursorMove}
            className={`bg-transparent w-full focus:outline-none font-mono tracking-wide ${
              theme === 'dark' 
                ? 'text-white placeholder-gray-500 caret-green-400' 
                : 'text-gray-900 placeholder-gray-400 caret-green-600'
            } ${className}`}
            spellCheck={false}
            autoComplete="off"
            placeholder="Type a command..."
          />
          {/* Custom cursor overlay for better visibility */}
          {isFocused && (
            <>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                className={`absolute top-0 w-0.5 h-full pointer-events-none terminal-cursor ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                }`}
                style={{
                  left: `${cursorPosition * 0.6}em`,
                  transform: 'translateY(1px)'
                }}
              />
              {/* Subtle typing glow effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className={`absolute top-0 w-1 h-full pointer-events-none blur-sm ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                }`}
                style={{
                  left: `${cursorPosition * 0.6}em`,
                  transform: 'translateY(1px) translateX(-1px)'
                }}
              />
            </>
          )}
        </div>
      </div>
      
      {/* Command suggestions */}
      {showSuggestions && suggestions.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute top-full left-0 right-0 mt-1 border rounded-md shadow-lg backdrop-blur-sm z-10 ${
            theme === 'dark' 
              ? 'bg-gray-900/95 border-gray-700' 
              : 'bg-white/95 border-gray-300'
          }`}
        >
          <div className="p-2">
            <div className={`text-xs mb-1 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Suggestions (Tab to complete):</div>
            {suggestions.map((suggestion, index) => (
              <motion.div
                key={suggestion}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`terminal-suggestion font-mono text-sm py-1 px-2 rounded cursor-pointer transition-colors ${
                  theme === 'dark' 
                    ? 'text-green-400 hover:bg-gray-800' 
                    : 'text-green-600 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setInput(suggestion);
                  setCursorPosition(suggestion.length);
                  setShowSuggestions(false);
                  inputRef.current?.focus();
                }}
              >
                <span className={theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}>$ </span>
                {suggestion}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
      
      {/* Typing indicator */}
      {input.length > 0 && isFocused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          className={`absolute top-full left-0 mt-0.5 text-xs font-mono flex items-center space-x-2 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}
        >
          <span>{input.length} character{input.length !== 1 ? 's' : ''}</span>
          <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>
            | Cursor: {cursorPosition}
          </span>
        </motion.div>
      )}
      
      {/* Keyboard shortcuts hint */}
      {!input && isFocused && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          className={`absolute top-full left-0 mt-0.5 text-xs font-mono ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-500'
          }`}
        >
          Press <kbd className={`px-1 py-0.5 rounded text-xs ${
            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-700'
          }`}>Tab</kbd> for suggestions • <kbd className={`px-1 py-0.5 rounded text-xs ${
            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-700'
          }`}>↑↓</kbd> for history
        </motion.div>
      )}
    </div>
  );
};
