import Card from "./Card";
import styles from "./Enter.module.css";
import { useDispatch } from "react-redux";
import { resultAction } from "../../store/redusers/calcReduser";


function Enter(){

  const dispatch = useDispatch();

  const enterClick = () => {
    dispatch(resultAction());
  };

  return (
    <Card>
      <button onClick={() => enterClick()}  className={styles.button}>=</button>
    </Card>
  )
};

export default Enter;