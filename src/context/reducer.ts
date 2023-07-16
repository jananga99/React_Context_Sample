import { IState } from "../utils/interfaces";
import { ActionType, IAction } from "./actions";


const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionType.DATA_FETCH_BEGIN:
      return { ...state, loading: true };
    case ActionType.DATA_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case ActionType.DATA_FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      throw new Error(`no such action :${action.type}`);
  }
};

export default reducer;
