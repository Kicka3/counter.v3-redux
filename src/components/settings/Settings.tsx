import React, {ChangeEvent} from 'react';
import {Button} from "../button/Button";
import '../settings/settings.css'
import {Input} from "../input/Input";
import {useDispatch, useSelector} from "react-redux";
import {setMaxValueAC, setStartValueAC, setStatusAC} from "../../reducers/CounterReducer";
import {RootReducerType} from "../../store/store";


type SettingsPropsType = {
    isValidMax: boolean
    isValidStart: boolean
    setSettings: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {
    const {setSettings, isValidMax, isValidStart} = props

    const start = useSelector<RootReducerType, number>(state => state.counterR.start);
    const status = useSelector<RootReducerType, boolean>(state => state.counterR.status);
    const max = useSelector<RootReducerType, number>(state => state.counterR.max);

    const dispatch = useDispatch();

    const onChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {          //Лювлю число из инпута
        const {id, value} = e.currentTarget
        console.log(value);

        switch (id) {
            case "maxValue": {
                dispatch(setMaxValueAC(+value));
                dispatch(setStatusAC(true));
                break
            }
            case "startValue": {
                dispatch(setStartValueAC(+value));
                dispatch(setStatusAC(true));
                break
            }
        }
    }


    const onClickBtnHandler = () => {
        setSettings()
    }

    return (
        <>
            <div className={"SettingsWrapper"}>
                <div className={"DisplaySettings"}>
                    <div className={"MaxValueWrapper"}>
                        <h1 className={"MaxValue"}>max value:</h1>
                        <Input name="maxValue"
                               onChangeInputs={onChangeInputs}
                               value={max}
                               isValid={isValidMax}
                        />
                    </div>
                    <div className={"StartValueWrapper"}>
                        <h1 className={"MaxValue"}>start value:</h1>
                        <Input name="startValue"
                               onChangeInputs={onChangeInputs}
                               value={start}
                               isValid={isValidStart}
                        />
                    </div>
                </div>

                <div className={"BtnWrapper"}>
                    <Button
                        className={status ? 'ActiveBtn' : 'DisabledBtn'}
                        name={"set"}
                        onClick={onClickBtnHandler}
                        disabled={max <= start || start < 0 || !status}
                    />
                </div>
            </div>
        </>

    );
};

