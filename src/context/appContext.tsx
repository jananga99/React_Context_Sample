import React, { useReducer, useContext, ReactNode } from "react";
import reducer from "./reducer";
import { IData, IState } from "../utils/interfaces";
import { fetchDataAsync } from '../utils/apiService';
import { ActionType,  } from "./actions";
import { errorConstants } from "../utils/constants";

interface IAppContext {
  data: IData[] | null;
  error: string | null;
  loading: boolean;
  fetchData: ()=>Promise<void>
}

const initialState: IState = {
  data: null,
  error: null,
  loading: false,
};

const initialAppContext: IAppContext = {
  data:  null,
  error:  null,
  loading: false,
  fetchData: async()=>{}
}

export const AppContext =
  React.createContext<IAppContext>(initialAppContext);

export const AppContextProvider = ({ children }:{children:React.ReactNode})=> {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async ()=>{
    dispatch({type: ActionType.DATA_FETCH_BEGIN});
    try{
      const res = await fetchDataAsync();
      const data = res?.data?.data;
      if(data){
        dispatch({type: ActionType.DATA_FETCH_SUCCESS, payload: data});
      }else{
        dispatch({type: ActionType.DATA_FETCH_ERROR, payload: errorConstants.dataFetch});
      }
    }catch(err){
      console.error(err);
      dispatch({type: ActionType.DATA_FETCH_ERROR, payload: errorConstants.dataFetch});
    }
  }

  return (
    <AppContext.Provider value={{...state, fetchData}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};


