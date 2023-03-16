export interface ICalcState {
  simbol: string;
  result: string;
  core: boolean;
  num: string;
};

export enum CalcActionTypes {
  ADD_NUMBER = "ADD_NUMBER",
  ADD_SIMBOL = "ADD_SIMBOL",
  ADD_RESULTS = "ADD_RESULTS",
};

interface ICalcNumberAction {
  type: CalcActionTypes.ADD_NUMBER;
  payload: string;
};
interface ICalcSimbolAction {
  type: CalcActionTypes.ADD_SIMBOL;
  payload: string;
};
interface ICalcResultAction {
  type: CalcActionTypes.ADD_RESULTS;
};

export type CalcAction = ICalcNumberAction | ICalcSimbolAction | ICalcResultAction;