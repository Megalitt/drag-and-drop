import React, { useState } from 'react';
import styles from  './App.module.css';
import Core from './components/UI/Core';
import Operators from './components/UI/Operators';
import DigitalBlock from './components/UI/DigitalBlock';
import Enter from './components/UI/Enter';
import Switch from './components/UI/Switch';
import classnames from 'classnames';
import { ReactComponent as Icon} from './components/image/Group.svg';
import { useDispatch} from "react-redux";
import { dragOverAction, dragLeaveAction, dragEndAction, dropAction } from './store/redusers/dragReduser';
import { useTypeSelector } from './components/UI/hooks/useTypeSelectjr';



function App() {

  const dispatch = useDispatch();

  const arr = [<Core/>, <Operators/>, <DigitalBlock/>, <Enter/>];

  const {canwas, can, drageb, drop} = useTypeSelector(state => state.dragReduser);
  
  const [elemBar, setElemBar] = useState(true);

  const removeBar = () => {
    setElemBar(true)
  };
  const addBar = () => {
    setElemBar(false)
  };

  const innerClass = classnames(styles.sidebar, {
    [styles.none]: elemBar
  });
  const canClass = classnames(styles.canvas, {
    [styles.canv]: can,
    [styles.border]: canwas.length
    });
  
  const dragOverHeandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(dragOverAction())
  };
  const dragLeaveHeandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(dragLeaveAction())
  };
  const dropHeandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
     dispatch(dropAction()) 
  };
  const dragEndHeandler = (e:React.DragEvent<HTMLDivElement>, item: JSX.Element, index: number) => {
    const list = {
      item,
      index,
    }
    e.preventDefault()
  {drop &&  dispatch(dragEndAction(list))}
};

  return (
    <div className={styles.app}>
      <div className={innerClass}>
        {arr.map((el, i) => 
          <div
            onDragEnd={(e) => dragEndHeandler(e, el, i) }
            className={!drageb[i] ? styles.shadow : styles.mous} 
            draggable={drageb[i]}
            key={i}
          >{el}</div>
       )}
      </div>
      <div 
        className={canClass}
        onDragOver={(e) => dragOverHeandler(e)}
        onDragLeave={(e) => dragLeaveHeandler(e)}
        onDrop={(e) => dropHeandler(e)}
        >
        {canwas.length < 1
          ?
          <div className={styles.can}>
            <Icon/>
            <span className={styles.span}>Перетащите сюда</span>
            <p className={styles.p}>любой элемент из левой панели</p>
          </div>
          :
          canwas.map((elem, j) => 
            <div key={j}>
              {elem}
            </div>
        )}
      </div>
      <Switch 
        addBar={() => addBar()}
        removeBar={() => removeBar()}
      />
    </div>
  );
}

export default App;
