import React from 'react';
import s from './Days.module.scss';
interface Props{}
export const Tabs = (props: Props) => {
    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];
    return (
        <div className={s.tabs}>

        </div>
    );
};