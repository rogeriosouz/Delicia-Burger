import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { GlobalStyles } from '../styles/globals';
import { THEME } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext>
      <AuthProvider>
        <CartProvider>
          <NextNProgress color={THEME.colors.bg} />
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </ThemeContext>
  );
}

export default MyApp;
