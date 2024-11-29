import '@/styles/globals.css'; // Import global styles here
import { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout'; 
import { ThemeProvider } from '@/context/ThemeContext';
import { GameProvider } from '@/context/GameContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GameProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GameProvider>
    </ThemeProvider>
  );
}

export default MyApp;
