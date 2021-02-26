import { match } from "assert";
import { useContext } from "react";
import { ChallegerContext } from "../context/ChallegerContext";
import styles from "../style/componets/ExperenceBar.module.css"


export function ExperienceBar() {
  const {CurrentExperience, experienceToNextLevel} = useContext(ChallegerContext)

  const percentToNextLevel = Math.round(+CurrentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{CurrentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel}px</span>
    </header>
  );
}