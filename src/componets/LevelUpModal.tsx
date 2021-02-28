import style from '../style/componets/LevelUpModal.module.css'
import { ChallegerContext } from "../context/ChallegerContext";
import { useContext } from 'react';


export function LevelUpModal() {
    const {level, CloseModal} = useContext(ChallegerContext)

    return(
        <div className={style.Overlay}>
            <div className={style.ModalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Vocé consegui meu brother.</p>

                <button type={'button'} onClick={CloseModal} >
                    <img src="icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>

    )
}