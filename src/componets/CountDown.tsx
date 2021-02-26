import { useState, useEffect, useContext } from 'react';
import { ChallegerContext } from '../context/ChallegerContext';
import styles from "../style/componets/CountDown.module.css";

let CountDownTimeout: NodeJS.Timeout

export function Countdown(){
  const { StartNewChalleger } = useContext(ChallegerContext)

  const [time, setTime] = useState(0.1 * 60);
  const [IsActive, setIsActive] = useState(false);
  const [hasFinished, sethasFinished] = useState(false)

  const minutes = Math.floor(time / 60); //Retornará os minutos por inteiro
  const seconds = time % 60;

  //PadStart - se a string não tiver 2 caracteres vai preencher a esquerda(start) com 0.
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);

  }

  function resetCountdown(){
    clearTimeout(CountDownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  // o useEffect monitora algo
  useEffect(() => {
    if (IsActive && time > 0) {
      CountDownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000)
    }else if (IsActive && time === 0){
      sethasFinished(true);
      setIsActive(false)
      StartNewChalleger();
    }
  }, [IsActive, time]); // Ele monitorará a mudança do active e do time

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