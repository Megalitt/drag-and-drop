import { DragAction, DragActionTypes, IDragState } from "../../components/types/drag";


const initialState: IDragState = {
  canwas: [],
  elemBar: true,
  can: false,
  drop: false,
  drageb: [true, true, true, true],
};

export const dragReduser = (state = initialState, action: DragAction ): IDragState => {
  switch (action.type) {
    case DragActionTypes.ON_DRAG_OVER:
      return {
        ...state,
        canwas: [...state.canwas],
        elemBar: true,
        can: true,
        drop: false,
        drageb: [...state.drageb],
      }
    case DragActionTypes.ON_DRAG_LEAVE:
      return {
        ...state,
        canwas: [...state.canwas],
        elemBar: true,
        can: false,
        drop: false,
        drageb: [...state.drageb],
      }
    case DragActionTypes.ON_DRAG_END:
       state.drageb.splice(action.payload.index, 1, false);
      return {
        ...state,
        canwas: [...state.canwas, action.payload.item],
        elemBar: true,
        can: false,
        drop: false,
        drageb: [...state.drageb],
      }
    case DragActionTypes.ON_DROP:
      return {
        ...state,
        canwas: [...state.canwas],
        elemBar: true,
        can: false,
        drop: true,
        drageb: [...state.drageb],
      }
    default:
      return state;
  }
};

export const dragOverAction = () => ({type: DragActionTypes.ON_DRAG_OVER});
export const dragLeaveAction = () => ({type: DragActionTypes.ON_DRAG_LEAVE});
export const dragEndAction = (payload: object) => ({type: DragActionTypes.ON_DRAG_END, payload});
export const dropAction = () => ({type: DragActionTypes.ON_DROP});