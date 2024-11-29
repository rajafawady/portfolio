export interface TerminalCommand {
    desc: string;
    category: 'system' | 'navigation' | 'entertainment' | 'customization' | 'fun';
  }
  
  export interface CommandGroups {
    basic: Record<string, TerminalCommand>;
    advanced: Record<string, TerminalCommand>;
    fun: Record<string, TerminalCommand>;
  }
  
  export interface TerminalEntry {
    id: string;
    type: 'system' | 'command' | 'output' | 'error' | 'fun';
    content: string;
    timestamp: number;
  }
  
  export interface TerminalProps {
    onCommand?: (command: string) => void;
    onThemeToggle?: () => void;
    onMatrixToggle?: () => void;
    className?: string;
  }