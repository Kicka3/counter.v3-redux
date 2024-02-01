import {counterReducer} from "../reducers/CounterReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counterR: counterReducer
});

export const store = createStore(rootReducer, loadState());


store.subscribe(() => {
    saveState({
        counterR: store.getState().counterR
    })
});

export type RootReducerType = ReturnType<typeof rootReducer>
export type RootStoreType = typeof store


//@ts-ignore
window.store = store;