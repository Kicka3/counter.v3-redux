import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "../reducers/CounterReducer";


const rootReducer = combineReducers({
    counterReducer: counterReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>

// export type RootStore = typeof store
export const store = createStore(rootReducer);


//@ts-ignore
window.store = store;