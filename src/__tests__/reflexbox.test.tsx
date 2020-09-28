import * as React from 'react';
import {Box, Text} from "../reflexbox";
import {ThemeProvider} from "../styled";
import 'jest-styled-components'
const renderer = require('react-test-renderer');

describe('reflexbox', () => {

    it('Box', async () => {
        const theme = {
            colors: {
                text: "#000",
                background: "#fff",
                primary: "#07c",
            },
            space: [0, 4, 8, 16, 32, 64, 128, 256],
            fonts: {
                roboto: "Roboto",
            },
            fontSizes: [12, 16, 18, 20, 24, 32, 40, 64, 96],
            text: {
                heading1: {
                    fontFamily: "roboto",
                    fontSize: 5,
                    color: "background",
                },
            },
        };

        const tree = renderer.create(<ThemeProvider theme={theme}>
            <Box
                sx={{
                    p: 4,
                    bg: "primary",
                }} />
        </ThemeProvider>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
