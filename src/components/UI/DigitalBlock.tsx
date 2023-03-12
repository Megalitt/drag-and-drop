import Card from "./Card";
import styles from "./DigitalBlock.module.css";
// import { FC } from "react";

const digitals = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","]

function DigitalBlock(){
  const digitalClick = () => {

  };

  return (
    <Card>
      <div className={styles.digital}>
        {digitals.map((el,i) => 
          <button onClick={() => digitalClick()} key={i} className={styles.button}>{el}</button>
        )}
     </div>
    </Card>
  )
};

export default DigitalBlock;