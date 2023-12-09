export type counterReducerMainType = IncrementACType
    | DecrementACType
    | ResetAC
    | SetCurrentValueAC
    | SetMaxValueAC
    | SetStatus
    | SetDisableBtnAC
    | SetStartValueAC

export const initialState = {
    counterValue: 0,
    max: 5,                 //default = 5;
    start: 0,
    value: 0,
    disableBtn: false,
    status: false,
}

export type StateType = typeof initialState;

export const counterReducer = (state: StateType = initialState, action: counterReducerMainType): StateType => {
    switch (action.type) {
        case "INCREMENT": {
            return {...state, counterValue: state.counterValue + 1}
        }
        case "DECREMENT": {
            return {...state, counterValue: state.counterValue - 1}
        }
        case "RESET": {
            return {...state, counterValue: state.counterValue = 0}
        }
        case "SET-CURRENT-VALUE": {
            return {...state, counterValue: state.counterValue = action.payload.value};
        }
        case "SET-MAX-VALUE": {
            return {...state, max: action.payload.value}
        }
        case "SET-STATUS": {
            return {...state, status: action.payload.status}
        }
        case "SET-DISABLE-BTN": {
            return {...state, disableBtn: action.payload.value}
        }
        case 'SET-START': {
            return {...state, start: action.payload.startValue}
        }
        default:
            return state
    }
}

type IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = (start: number) => {
    return {
        type: 'INCREMENT',
        payload: {
            start
        }
    } as const
}

type DecrementACType = ReturnType<typeof decrementAC>
export const decrementAC = () => {
    return {
        type: 'DECREMENT',
    } as const
}

type ResetAC = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET',
    } as const
}

type SetCurrentValueAC = ReturnType<typeof setCurrentValueAC>
export const setCurrentValueAC = (value: number) => {
    return {
        type: 'SET-CURRENT-VALUE',
        payload: {
            value
        }
    } as const
}

type SetStartValueAC = ReturnType<typeof setStartValueAC>
export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET-START',
        payload: {
            startValue
        }
    } as const
}

type SetMaxValueAC = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            value,
        }
    } as const
}


type SetStatus = ReturnType<typeof setStatusAC>
export const setStatusAC = (status: boolean) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status,
        }
    } as const
}

type SetDisableBtnAC = ReturnType<typeof setDisableBtnAC>
export const setDisableBtnAC = (value: boolean) => {
    return {
        type: 'SET-DISABLE-BTN',
        payload: {
            value
        }
    } as const
}

