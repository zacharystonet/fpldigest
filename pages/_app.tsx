import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from "recoil"
import { CookiesProvider } from "react-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CookiesProvider>
        <Component {...pageProps} />
      </CookiesProvider>
    </RecoilRoot>
  );
}

export default MyApp
