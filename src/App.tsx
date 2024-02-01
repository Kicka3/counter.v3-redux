import React from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {incrementAC, resetAC, setStatusAC} from "./reducers/CounterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store/store";


export type counterValue = {
    value: number
}

function App() {
    const counterValue = useSelector<RootReducerType, number>(state => state.counterR.counterValue);
    const max = useSelector<RootReducerType, number>(state => state.counterR.max);
    const start = useSelector<RootReducerType, number>(state => state.counterR.start);

    const dispatch = useDispatch();

    const isValidMax = max <= 0 || max <= start
    const isValidStart = start < 0 || start >= max

    const incBtnHandler = () => {                       //inc counter
        const actionInc = incrementAC(start);
        if (counterValue < max) {
            dispatch(actionInc);

            console.log('inc+')
        }
    }


    const resetCountHandler = () => {
        const action = resetAC();
        dispatch(action);

        console.log('RESET');
    }

    const setSettings = () => {
        // localStorage.setItem('maxValue', `${max}`);                    //Закидываю в storage по нажатию на SET
        // localStorage.setItem('startValue', `${start}`);                //Закидываю в storage по нажатию на SET

        // dispatch(setCurrentValueAC(start));
        dispatch(setStatusAC(false));
        console.log(`setSettings - тут закидываю число: ${start} в сторэдж`);
    }

    //Тут будет логика для сохранения числа в инпут
    // useEffect(() => {                                                   //Достаю число из storage для инпут при перезагрузке
    //     let maxFromStorage = localStorage.getItem('maxValue')
    //     if (maxFromStorage) {
    //         let maxValueFromStorage = JSON.parse(maxFromStorage)
    //         setMax(maxValueFromStorage)
    //         console.log(`Достал max число из Storage ` + maxValueFromStorage)
    //     }
    //     let startFromStorage = localStorage.getItem('startValue')
    //     if (startFromStorage) {
    //         let startValueFromStorage = JSON.parse(startFromStorage)
    //         setStart(startValueFromStorage)
    //         console.log(`Достал start число из Storage ` + startValueFromStorage)
    //     }
    // }, []);

    return (
        <div className="App">
            <Settings
                setSettings={setSettings}
                isValidMax={isValidMax}
                isValidStart={isValidStart}
            />
            <Counter
                incBtn={incBtnHandler}
                resetCount={resetCountHandler}
            />
        </div>

    );
}

export default App;
