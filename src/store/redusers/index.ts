import { dragReduser } from "./dragReduser";
import {combineReducers} from "redux";

export const rootReduser = combineReducers({
  dragReduser,
});

export type RootState = ReturnType<typeof rootReduser>;