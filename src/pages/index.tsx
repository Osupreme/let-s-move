import Head from 'next/head';
import { ChallengerBox } from '../componets/ChallengerBox';
import { CompletteChallenge } from "../componets/CompleteChalleger";
import { Countdown } from "../componets/CountDown";
import { ExperienceBar } from "../componets/ExperenceBar";
import { Profile } from "../componets/Profile";
import { CountdownProvider } from '../context/CountdownContext';
import styles from '../style/peges/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Start | Move.it</title>
      </Head>
      <ExperienceBar />
      
      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletteChallenge />
          <Countdown />
          
        </div>
        <div>
        <ChallengerBox/>
        </div>
      </section>
      </CountdownProvider>
    </div>
  );
}
