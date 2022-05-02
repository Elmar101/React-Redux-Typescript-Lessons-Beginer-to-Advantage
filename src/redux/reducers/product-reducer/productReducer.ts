import { Action } from "redux";

export const productReducer = (
    state: { name: string }[] = [{ name: "IPone 5C" }],
    action: Action<string> & { payload: { data: { name: string }[] } }
  ) => {
    return state;
};