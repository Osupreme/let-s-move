import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import styles from "../style/componets/CountDown.module.css";

export function Countdown(){
  const { minutes, seconds, hasFinished, IsActive, resetCountdown, startCountdown } = useContext(CountdownContext)

  //PadStart - se a string não tiver 2 caracteres vai preencher a esquerda(start) com 0.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  return (
    <div>
      <div className={styles.Countdown}>

        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>

        <span>:</span>

        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button 
        disabled 
        className={styles.CountdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
        <>
      { IsActive ? (
        <button 
      type="button"
      onClick={resetCountdown} 
      className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
      >
        Abandonar Ciclo
      </button>
      ) : (
        <button 
        type="button"
        onClick={startCountdown} 
        className={styles.CountdownButton}
        >
          Iniciar ciclo
        </button>
      ) }
      </>
      ) }

    </div>

  );
}