import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalInputProps {
  onSubmit: (command: string) => void;
  onHistoryNav: (direction: 'up' | 'down') => void;
  className?: string;
  commandHistory: string[]; // Command history
  historyIndex: number; // Current history index
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  onSubmit,
  onHistoryNav,
  className,
  commandHistory,
  historyIndex,
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(input); // Submit the command
      setInput(''); // Clear the input after submitting
    } else if (e.key === 'ArrowUp') {      
      if (commandHistory.length>0) {
        onHistoryNav('up'); 
      }
      e.preventDefault(); 
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > -1 && commandHistory.length>0) {
        onHistoryNav('down'); 
      }
      e.preventDefault(); 
    }
  };

  // Update the input based on the current history index
  useEffect(() => {
    if (historyIndex === -1) {
      setInput(''); // Reset input when no history is selected
    } else {
      setInput(commandHistory[historyIndex] || ''); // Set input to the current command in history
    }
  }, [historyIndex, commandHistory]); // Re-run when historyIndex or commandHistory changes

  // Focus the input field when component is rendered or updated
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex items-center">
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="text-green-400 mr-2"
      >
        &gt;
      </motion.span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`bg-transparent w-full focus:outline-none ${className}`}
        spellCheck={false}
        autoComplete="off"
      />
    </div>
  );
};
