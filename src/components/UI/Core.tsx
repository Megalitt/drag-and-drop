import styles from './Core.module.css';
import Card from './Card';
import { useTypeSelector } from '../UI/hooks/useTypeSelectjr';
import classnames from 'classnames';

function Core(){

  const {result, core} = useTypeSelector(state => state.calcReduser);

  const innerClass = classnames(styles.core, {
    [styles.leng]: core,
  });
  
  return (
    <Card>
      <div className={innerClass}>{result}</div>
    </Card>
  )
};

export default Core;