import { CalcAction, CalcActionTypes, ICalcState } from "../../components/types/calc";

const initialState: ICalcState = {
  simbol: '',
  result: '0',
  core: false,
  num: '',
};

export const calcReduser = (state = initialState, action: CalcAction): ICalcState => {
  switch (action.type) {
    case CalcActionTypes.ADD_NUMBER:
      const number = () => {
        if(action.payload === ','){
          return '.'
        }else{
          return action.payload
        }
      };
      return {
        ...state,
        simbol: state.simbol,
        result: (state.result + number()).replace(/^0+/, ''),
        core: state.result.length > 13,
        num:state.num,
      }
    case CalcActionTypes.ADD_SIMBOL:
      const simbol = () => {
        if(action.payload === 'x'){
          return '*'
        }else{
          return action.payload
        }
      };
      return {
        ...state,
        simbol: simbol(),
        result: '',
        core: false,
        num: state.result,
      }
    case CalcActionTypes.ADD_RESULTS:
      const calulator = (a: string, b: string): string => {
        if(state.simbol === '/'){
          return `${+a / +b}`
        };
        if(state.simbol === '*'){
          return `${+a * +b}`
        };
        if(state.simbol === '+'){
          return `${+a + +b}`
        };
        if(state.simbol === '-'){
          return `${+a - +b}`
        };
        return "Ошибка"
      };
      return {
        ...state,
        simbol: state.simbol,
        result: calulator(state.num, state.result), 
        core: calulator(state.num, state.result).length > 13,
        num: state.num,
      }
    default:
      return state;
  }
};

export const calcNumberAction = (payload: string) => ({type: CalcActionTypes.ADD_NUMBER, payload});
export const calcSimbolAction = (payload: string) => ({type: CalcActionTypes.ADD_SIMBOL, payload});
export const resultAction = () => ({type: CalcActionTypes.ADD_RESULTS});

