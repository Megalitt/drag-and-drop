
import styles from './Card.module.css';

type PropsType = {
  children: React.ReactNode,
};

function Card({children}:PropsType){
  return (
    <div className={styles.card}>{children}</div>
  )
};

export default Card;