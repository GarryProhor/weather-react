import React, {ReactNode} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {changeCssRootVariables} from "../model/ChangeCssRootVariables";

interface Props {
    children: ReactNode,
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = React.useState('light');

    const changeTheme = (theme: string) => {
        setTheme(theme);
        changeCssRootVariables(theme);
    }
    return (
        <ThemeContext.Provider value={
            {
                theme,
                changeTheme,
            }
        }{...props}>
            {children}
        </ThemeContext.Provider>
    )
}