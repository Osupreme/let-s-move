import { useContext } from "react";
import { ChallegerContext } from "../context/ChallegerContext";
import styles from "../style/componets/CompleteTasks.module.css";

export function CompletteChallenge() {
  const {ChallengerCompleted} = useContext(ChallegerContext)

  return (
    <div className={styles.completteChallenge}>
      <span>Desafios completos</span>
      <span>{ ChallengerCompleted }</span>
    </div>
  );
}