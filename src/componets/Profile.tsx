import styles from "../style/componets/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://www.abo-sc.org.br/wp-content/uploads/2017/06/img-perfil-fem1.png" alt="Foto aleatoria" />
      <div>
        <strong>Guilherme Henrique</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
          </p>
      </div>
    </div>
  );
}