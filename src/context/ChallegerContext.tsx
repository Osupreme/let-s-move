import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import ChallengerTasks from "../../ChallengerTasks.json"
import { LevelUpModal } from '../componets/LevelUpModal';



interface Challgen{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengerContextData{
    level: Number;
    CurrentExperience: Number;
    ChallengerCompleted: Number;
    experienceToNextLevel: number;
    ActiveChallenger:Challgen;
    StartNewChalleger: () => void;
    CompleteChallengerTask: () =>void;
    ResetChallenger:() => void;
    CloseModal: () => void;
    LevelUp: () => void;
}

interface ChallengersProvidersProps{
    children: ReactNode;
    level: number;
    CurrentExperience: number;
    ChallengerCompleted: number;
}

export const ChallegerContext = createContext({} as ChallengerContextData);

export function ChallengerProvider({children, ...rest}: ChallengersProvidersProps){
    const [level, setLevel] = useState(rest.level ?? 1);
    const [CurrentExperience, setCurrentExprience] = useState(rest.CurrentExperience ?? 0);
    const [ ChallengerCompleted, setChallengerComplete ] = useState(rest.ChallengerCompleted ?? 0);

    const [ActiveChallenger, setActivChallenger] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Cookies.set('level', String(level)) 
        Cookies.set('ChallengerCompleted', String(ChallengerCompleted)) 
        Cookies.set('CurrentExperience', String(CurrentExperience)) 
    }, [level, ChallengerCompleted, CurrentExperience])

    useEffect(() => {
        Notification.requestPermission();
      }, []);

    function LevelUp() {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true);    
    }

    function CloseModal (){
        setIsLevelUpModalOpen(false);
    }

    function StartNewChalleger() {
        const RandomChallengerIndex = Math.floor(Math.random() * ChallengerTasks.length)
        const Challenger = ChallengerTasks[RandomChallengerIndex]

        setActivChallenger(Challenger)

        new Audio('/notification.mp3').play();

    }

    function ResetChallenger(){
        setActivChallenger(null)
    }

    function CompleteChallengerTask(){
        if(!ActiveChallenger){
            return;
        }
    const { amount } = ActiveChallenger;

    let FinalExperience = CurrentExperience + amount;

    if(FinalExperience >= experienceToNextLevel){
        FinalExperience = FinalExperience - experienceToNextLevel;
        LevelUp();
    }

    setCurrentExprience(FinalExperience);
    setActivChallenger(null);
    setChallengerComplete(ChallengerCompleted + 1);

    }

    return(
        <ChallegerContext.Provider value={{
            level, 
            CurrentExperience, 
            ChallengerCompleted,
            experienceToNextLevel,
            ActiveChallenger,
            StartNewChalleger, 
            CompleteChallengerTask,
            ResetChallenger,
            CloseModal,
            LevelUp
        }}
        >    
        {children}
        
        {isLevelUpModalOpen && <LevelUpModal/>}
        </ChallegerContext.Provider>
    )
}