import { dragReduser } from "./dragReduser";
import { calcReduser } from "./calcReduser";
import {combineReducers} from "redux";

export const rootReduser = combineReducers({
  calcReduser,
  dragReduser,
});

export type RootState = ReturnType<typeof rootReduser>;