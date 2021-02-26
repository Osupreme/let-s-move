import { createContext, ReactNode, useState } from 'react';
import ChallengerTasks from "../../ChallengerTasks.json"

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
    ResetChallenger:() => void;
    LevelUp: () => void;
}

interface ChallengersProvidersProps{
    children: ReactNode;
}

export const ChallegerContext = createContext({} as ChallengerContextData);

export function ChallengerProvider({children}: ChallengersProvidersProps){
    const [level, setLevel] = useState(1);
    const [CurrentExperience, setCurrentExprience] = useState(0);
    const [ ChallengerCompleted, setChallengerComplete ] = useState(0);

    const [ActiveChallenger, setActivChallenger] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function LevelUp() {
        setLevel(level + 1);    
    }

    function StartNewChalleger() {
        const RandomChallengerIndex = Math.floor(Math.random() * ChallengerTasks.length)
        const Challenger = ChallengerTasks[RandomChallengerIndex]

        setActivChallenger(Challenger)
    }

    function ResetChallenger(){
        setActivChallenger(null)
    }

    return(
        <ChallegerContext.Provider value={{
            level, 
            CurrentExperience, 
            ChallengerCompleted,
            experienceToNextLevel,
            ActiveChallenger,
            StartNewChalleger, 
            ResetChallenger,
            LevelUp
        }}
        >    
        {children}
        </ChallegerContext.Provider>
    )
}