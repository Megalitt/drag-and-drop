import Card from "./Card";
import styles from "./Operators.module.css";

const simbol = ["/", "x", "-", "+"]

function Operators(){
  const simbolClick = () => {

  };

  return (
    <Card>
      {simbol.map((el,i) => 
      <button onClick={() => simbolClick()} key={i} className={styles.button}>{el}</button>
     )}
    </Card>
  )
};

export default Operators;