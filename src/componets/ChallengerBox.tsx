import { useContext, useState } from 'react'
import { ChallegerContext } from '../context/ChallegerContext'
import style from '../style/componets/ChallengerBox.module.css'

export function ChallengerBox(){
    const {ActiveChallenger, ResetChallenger } = useContext(ChallegerContext)

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
                onClick={ResetChallenger}
                >
                    Falhei...
                </button>
                <button
                 type="button"
                 className={style.ChallegerSucceededButton}
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