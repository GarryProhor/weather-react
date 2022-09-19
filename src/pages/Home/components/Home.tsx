import React, {useEffect} from 'react';
import s from './Home.module.scss';
import {ThisDay} from "./ThisDay/ThisDay";
import {ThisDayInfo} from "./ThisDayInfo/ThisDayInfo";
import {Days} from "./Days/Days";
import {useCustomDispatch, useCustomSelector} from "../../../hooks/useCustomStore";
import {fetchCurrentWeather} from "../../../store/thunks/fetchCurrentWeather";
import {selectCurrentWeatherData} from "../../../store/selectors";
interface Props {

}

export const Home = (props: Props) => {
    const dispatch = useCustomDispatch();

    const {weather} = useCustomSelector(
        selectCurrentWeatherData
    );

    useEffect(()=>{
        dispatch(fetchCurrentWeather('homel'))
    }, []);
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo weather={weather}/>
            </div>
            <Days />
        </div>
    );
};

