import Card from "./Card";
import styles from "./DigitalBlock.module.css";
import { useDispatch } from "react-redux";
import { calcNumberAction } from "../../store/redusers/calcReduser";




function DigitalBlock(){

  const digitals = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ","];

  const dispatch = useDispatch();
  const digitalClick = (el: string) => {
    dispatch(calcNumberAction(el))
  };
 
  return (
    <Card>
      <div className={styles.digital}>
        {digitals.map((el, i) => 
          <button onClick={() => digitalClick(el)} key={i}  className={styles.button}>{el}</button>
        )}
     </div>
    </Card>
  )
};

export default DigitalBlock;