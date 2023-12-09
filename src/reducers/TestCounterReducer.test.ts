import {counterReducer, incrementAC, StateType} from "./CounterReducer";

let startState: StateType;
beforeEach(() => {
    startState = {
        counterValue: 3,
        max: 5,
        start: 0,
        disableBtn: false,
        status: false,
        value: 0,
    }
});


test('the current number should be incremented', () => {
    let action = incrementAC(startState.counterValue)
    const endState = counterReducer(startState, action)

    expect(endState.counterValue).toBe(startState.counterValue = 4);
});

test('the current number should be reduced', () => {

    const endState = counterReducer(startState, {type: 'DECREMENT'})

    expect(endState.counterValue).toBe(-1);
});

test('the current number should be reseted', () => {

    const endState = counterReducer(startState, {type: "RESET"});

    expect(endState.counterValue).toBe(0);
});

test('the start value should be 6', () => {
    const startValue: number = 3;

    const endState = counterReducer(startState, {
        type: 'SET-START',
        payload: {
            startValue
        }
    });

    expect(endState.start).toBe(3);
});

test('status must change', () => {
    const status = true;

    const endState = counterReducer(startState, {
        type: 'SET-STATUS',
        payload: {
            status
        }
    });

    expect(endState.status).toBe(endState.status = false);
});
