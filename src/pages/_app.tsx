import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallangeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
