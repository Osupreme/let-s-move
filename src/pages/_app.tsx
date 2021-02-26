import "../style/global.css";

import { ChallengerProvider } from '../context/ChallegerContext'

function MyApp({ Component, pageProps }) {
      return(
          <ChallengerProvider>
          <Component {...pageProps} />
          </ChallengerProvider>
      );
}

export default MyApp
