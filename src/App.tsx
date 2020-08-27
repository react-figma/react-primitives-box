import * as React from 'react';
import { Page } from 'react-figma';
import {ThemeProvider} from "./styled";
import { Box } from "./reflexbox";
import { Text } from "./rebass";
import {DesignSystem} from "./components/design-system/DesignSystem";

const theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
    },
    space: [
        0, 4, 8, 16, 32, 64, 128, 256,
    ],
    fonts: {
        roboto: "Roboto",
    },
    fontSizes: [12, 16, 18, 20, 24, 32, 40, 64, 96],
    text: {
        heading1: {
            fontFamily: "roboto",
            fontSize: 5,
            color: "background"
        }
    }
}


const App = () => {
    return (
        <Page isCurrent name="Design System">
            <ThemeProvider theme={theme}>
                <DesignSystem />
            </ThemeProvider>
        </Page>
    );
};

export { App };
