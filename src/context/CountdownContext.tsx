import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallegerContext } from "./ChallegerContext";

interface CountdownContextData{
    minutes:number;
    seconds:number;
    hasFinished:boolean;
    IsActive:boolean;
    resetCountdown: () => void;
    startCountdown: () => void;
}

interface CountdownnProvidersProps{
    children: ReactNode;
}

let CountDownTimeout: NodeJS.Timeout

export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({children}: CountdownnProvidersProps){
    const { StartNewChalleger } = useContext(ChallegerContext)

    const [time, setTime] = useState(25 * 60);
    const [IsActive, setIsActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false)
  
    const minutes = Math.floor(time / 60); //Retornará os minutos por inteiro
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    
      }
    
      function resetCountdown(){
        clearTimeout(CountDownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        sethasFinished(false);
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
    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            IsActive,
            resetCountdown,
            startCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}