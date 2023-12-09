import React from 'react';
import {Button} from "../button/Button";
import '../counter/counter.css'
import {DisplayCounter} from "../displayCounter/DisplayCounter";
import {useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";


type CounterPropsType = {
    incBtn: () => void                                //Инкрементация
    resetCount: () => void                            //reset btn
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    const disableBtn = useSelector<RootReducerType, boolean>(state => state.counterReducer.disableBtn);
    const max = useSelector<RootReducerType, number>(state => state.counterReducer.max);
    const start = useSelector<RootReducerType, number>(state => state.counterReducer.start);
    const counterValue = useSelector<RootReducerType, number>(state => state.counterReducer.counterValue);

    const {incBtn, resetCount} = props

    return (
        <>
            <div className={"Counter"}>
                <div className={"DisplayCount"}>
                    <DisplayCounter/>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={counterValue === max || max === start ? 'DisabledBtn' : 'ActiveBtn'}
                        name={"inc"}
                        onClick={incBtn}
                        disabled={counterValue === max || max <= start || max < 0 || start < 0}
                    />
                    <Button
                        className={!disableBtn ? 'ActiveBtn' : 'DisabledBtn'}
                        name={"reset"}
                        onClick={resetCount}
                        disabled={counterValue === start || max <= start || start < 0}
                    />
                </div>
            </div>
        </>

    );
};

