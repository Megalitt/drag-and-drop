import { useState } from 'react';
import { ReactComponent as Runtime } from '../image/eye.svg';
import { ReactComponent as Constructor } from '../image/selector.svg';
import styles from "./Switch.module.css";
import classnames from 'classnames';


type Props = {
  addBar: () => void,
  removeBar: () => void,
};

function Switch({addBar, removeBar}: Props){

  const [swit, setSwit] = useState<boolean>(false);
  
  const runtimeClick = () => {
    setSwit(false)
    removeBar()
  };
  const constructorClick = () => {
    setSwit(true)
    addBar() 
  };

  const runtimeClass = classnames(styles.runtime, {
    [styles['runtime-no']]: !swit
  });
  const constructorClass = classnames(styles.construktor, {
    [styles['construktor-no']]: swit
  });

  return (
    <div className={styles.switch}>
      <button onClick={() => runtimeClick()}  className={runtimeClass}><div className={styles.run}><Runtime/></div>Runtime</button>
      <button onClick={() => constructorClick()}  className={constructorClass}><div className={styles.constr}><Constructor/></div>Constructor</button>
    </div>
  )
};

export default Switch;