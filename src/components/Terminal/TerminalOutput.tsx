import React from 'react';
import { TerminalEntry } from './types';

interface TerminalOutputProps {
  type: TerminalEntry['type'];
  content: string;
  timestamp: number;
}

export const TerminalOutput: React.FC<TerminalOutputProps> = ({
  type,
  content
}) => {
  const getPrefix = () => {
    switch (type) {
      case 'command':
        return '> ';
      case 'error':
        return '✕ ';
      case 'system':
        return '$ ';
      default:
        return '';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'error':
        return 'text-red-400';
      case 'system':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <div className={`font-mono ${getTextColor()}`}>
      <span className="mr-2">{getPrefix()}</span>
      <span className="whitespace-pre-wrap">{content}</span>
    </div>
  );
};