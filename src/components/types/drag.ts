export interface IDragState {
  canwas: JSX.Element[];
  elemBar: boolean;
  can: boolean;
  drop: boolean;
  drageb: boolean[];
};

export enum DragActionTypes {
  ON_DRAG_OVER = "ON_DRAG_OVER",
  ON_DRAG_LEAVE = "ON_DRAG_LEAVE",
  ON_DRAG_END = "ON_DRAG_END",
  ON_DROP = "ON_DROP",
};

interface IDragOverAction {
  type: DragActionTypes.ON_DRAG_OVER;
};
interface IDragLeaveAction {
  type: DragActionTypes.ON_DRAG_LEAVE;
};
interface IDragEndAction {
  type: DragActionTypes.ON_DRAG_END;
  payload: {
    item:JSX.Element,
    index: number,
  };
};
interface IDropAction {
  type: DragActionTypes.ON_DROP;
};

export type DragAction = IDragOverAction | IDragLeaveAction | IDragEndAction | IDropAction;