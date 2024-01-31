import {counterReducer} from "../reducers/CounterReducer";
import {combineReducers, legacy_createStore as createStore} from "redux";


const rootReducer = combineReducers({
    counterR: counterReducer
});

export type RootReducerType = ReturnType<typeof rootReducer>
// export type RootStore = typeof store
export const store = createStore(rootReducer);



store.subscribe(() => {
    //set value in ls

})



//@ts-ignore
window.store = store;