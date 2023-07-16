export interface IData {
  id: number;
  lastName: string;
  firstName: string;
  age: number;
}

export interface IState {
  data: IData[] | null;
  error: string | null;
  loading: boolean;
}