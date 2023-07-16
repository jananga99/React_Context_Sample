export enum ActionType  {
  DATA_FETCH_BEGIN,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_ERROR
};

export type IAction = {
  type: ActionType ;
  payload?: any
};
