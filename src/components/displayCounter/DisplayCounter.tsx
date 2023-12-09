import React, {JSX} from 'react';
import {useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";


export const DisplayCounter = () => {

    const counterValue = useSelector<RootReducerType, number>(state => state.counterReducer.counterValue);
    const max = useSelector<RootReducerType, number>(state => state.counterReducer.max);
    const start = useSelector<RootReducerType, number>(state => state.counterReducer.start);
    const status = useSelector<RootReducerType, boolean>(state => state.counterReducer.status);
    const disableBtn = useSelector<RootReducerType, boolean>(state => state.counterReducer.disableBtn);

    // reduxReselect узнать

    let statusErr = (start < 0 || max <= start);
    let statusDisplay = (status ? 'Enter values and press set' : counterValue);


    const displayCounter: JSX.Element =
        <h1 className={counterValue === max ? "MaxNumberError" : ''}>
            {disableBtn
                ? <span className={statusErr ? "MaxNumErrorTitle" : ""}>{counterValue}</span>
                :
                <span
                    className={statusErr ? 'errorMessage' : ""}>{statusErr ? 'Incorrect value' : statusDisplay} </span>
            }
        </h1>

    return (
        <>
            {displayCounter}
        </>
    );
};

