import * as React from 'react';
import { Page, Rectangle, Text } from 'react-figma';
import {ThemeProvider} from "./styled";
import {Box} from "./reflexbox";

const theme = {
    colors: {
        text: '#000',
        background: '#fff',
        primary: '#07c',
    },
    space: [
        0, 4, 8, 16, 32, 64, 128, 256,
    ],
}


export const App = () => {
    return (
        <Page isCurrent name="Page X">
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        p: 4,
                        bg: 'primary',
                    }}>
                    <Text>
                        Hello
                    </Text>
                </Box>
            </ThemeProvider>
        </Page>
    );
};
