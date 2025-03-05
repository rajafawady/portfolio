import '@/styles/globals.css'; // Import global styles here
import { AppProps } from 'next/app';
import Layout from '@/components/Layout/Layout'; 
import { ThemeProvider } from '@/context/ThemeContext';
import { GameProvider } from '@/context/GameContext';
import { CalendlyProvider } from "@/context/CalendlyContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GameProvider>
      <CalendlyProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CalendlyProvider>
      </GameProvider>
    </ThemeProvider>
  );
}

export default MyApp;
