import React from 'react';
import Select from 'react-select';
import s from './Header.module.scss';
import {GlobalSvgSelector} from "../../assets/icons/global/GlobalSvgSelector";
import {useTheme} from "../../hooks/useTheme";
interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();
    const options = [
        { value: 'city-1', label: 'Гомель' },
        { value: 'city-2', label: 'Минск' },
        { value: 'city-3', label: 'Корма' }
    ];

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === 'dark' ? '#fff' : '#000',
        }),
    };

    const changeTheme = () =>{
        theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
    }
    React.useEffect(()=>{
        const root = document.querySelector(':root') as HTMLElement;

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
        ];
        components.forEach(component =>{
            root.style.setProperty(
                `--${component}-default`,
                `var(--${component}-${theme.theme}`);
        });
    }, [theme.theme]);
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={s.title}>Weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme'/>
                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>
        </header>
    );
};
