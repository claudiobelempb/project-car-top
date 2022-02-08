import type { AppProps } from 'next/app';
import 'assets/css/custom.scss';
// import '~bootstrap/js/src/collapse.js';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
