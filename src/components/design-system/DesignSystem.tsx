import * as React from 'react';
import { ThemeContext } from "styled-components/primitives";
import {Spacers} from "./Spacers";

export const DesignSystem = () => {
    const themeContext = React.useContext(ThemeContext);
    return <>
        <Spacers />
    </>
}
