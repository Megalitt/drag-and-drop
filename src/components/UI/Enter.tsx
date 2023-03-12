import Card from "./Card";
import styles from "./Enter.module.css";

function Enter(){
  const enterClick = () => {

  };

  return (
    <Card>
      <button onClick={() => enterClick()}  className={styles.button}>=</button>
    </Card>
  )
};

export default Enter;