import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { ChallengerBox } from '../componets/ChallengerBox';
import { CompletteChallenge } from "../componets/CompleteChalleger";
import { Countdown } from "../componets/CountDown";
import { ExperienceBar } from "../componets/ExperenceBar";
import { Profile } from "../componets/Profile";
import { CountdownProvider } from '../context/CountdownContext';
import { ChallengerProvider } from '../context/ChallegerContext';

import styles from '../style/peges/Home.module.css';


interface Homepage{
  level: number;
  CurrentExperience: number;
  ChallengerCompleted: number;
}

export default function Home(props: Homepage) {
  return (
    <ChallengerProvider
    level = {props.level}
    ChallengerCompleted = {props.ChallengerCompleted}
    CurrentExperience = {props.CurrentExperience}

    >
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
    </ChallengerProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, CurrentExperience, ChallengerCompleted } = ctx.req.cookies

  return{
    props: {
      level: Number(level),
      CurrentExperience: Number(CurrentExperience),
      ChallengerCompleted: Number(ChallengerCompleted),
    }
  }

}
