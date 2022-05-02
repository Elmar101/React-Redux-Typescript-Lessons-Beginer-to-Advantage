import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/product-reducer/productReducer";
import { userReducer } from "./reducers/user-reducer/userReducer";

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());