import { Action } from "redux";
interface ISTATE {
    productName: string
}

interface IACTION extends Action<string> {
  payload: {
    product: {
      name: string;
    }
  }
}
const initialState:ISTATE[] = [{productName: "TV"}];
export const productsReducer = ( state: ISTATE[] = initialState, action: IACTION) => {
  switch(action.type){
    default: return state
  }
};