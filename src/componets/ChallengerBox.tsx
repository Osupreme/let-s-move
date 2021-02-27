import { useContext, useState } from 'react'
import { ChallegerContext } from '../context/ChallegerContext'
import { CountdownContext } from '../context/CountdownContext'
import style from '../style/componets/ChallengerBox.module.css'

export function ChallengerBox(){
    const {ActiveChallenger, ResetChallenger, CompleteChallengerTask } = useContext(ChallegerContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengerSucceeded(){
        CompleteChallengerTask();
        resetCountdown();
    }

    function handleChallengerFailed(){
        ResetChallenger();
        resetCountdown();
    }

    return(
    <div className={style.ChallengerBoxContainer}>
     { ActiveChallenger ? (
         <div className={style.ChallegerActive}>
            <header>Ganhe {ActiveChallenger.amount} XP</header>

            <main>
                <img src={`icons/${ActiveChallenger.type}.svg`} />
                <strong>Novo Desafio</strong>
                <p>{ActiveChallenger.description}</p>
            </main>

            <footer>
                <button
                type="button"
                className={style.ChallegerFailedButton}
                onClick={handleChallengerFailed}
                >
                    Falhei...
                </button>
                <button
                 type="button"
                 className={style.ChallegerSucceededButton}
                 onClick={handleChallengerSucceeded}
                >
                    Concluido
                </button>
            </footer>
         </div>
     ) : (
        <div className={style.ChallengerNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados.</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level Up"/>
                Avance de level concluindo desafios.
            </p>
        </div>
     ) }
    </div>
    )
}