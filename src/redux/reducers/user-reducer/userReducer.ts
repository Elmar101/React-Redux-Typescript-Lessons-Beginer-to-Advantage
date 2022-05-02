import { Action } from "redux";

export const userReducer = (
    state: string = "User1",
    action: Action<string> & { payload: { data: string } }
  ) => {
    if (action.type === "new state") {
      return action.payload.data;
    }
    return state;
};