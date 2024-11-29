import {Terminal} from '@/components/Terminal/Terminal';
import { useTheme } from '@/context/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
      <Terminal onThemeToggle={toggleTheme} />
  );
}
