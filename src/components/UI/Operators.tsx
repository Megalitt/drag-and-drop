import Card from "./Card";
import styles from "./Operators.module.css";
import { useDispatch } from "react-redux";
import { calcSimbolAction } from "../../store/redusers/calcReduser";



function Operators(){

  const simbol = ["/", "x", "-", "+"];

  const dispatch = useDispatch();

  const simbolClick = (el: string) => {
    dispatch(calcSimbolAction(el));
  };

  return (
    <Card>
      {simbol.map((el, i) => 
      <button onClick={() => simbolClick(el)} key={i} className={styles.button}>{el}</button>
     )}
    </Card>
  )
};

export default Operators;