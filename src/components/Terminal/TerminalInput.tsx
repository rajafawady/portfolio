import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalInputProps {
  onSubmit: (command: string) => void;
  onHistoryNav: (direction: 'up' | 'down') => void;
  className?: string;
}

export const TerminalInput: React.FC<TerminalInputProps> = ({
  onSubmit,
  onHistoryNav,
  className
}) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      onHistoryNav('up');
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      onHistoryNav('down');
      e.preventDefault();
    }
  };

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