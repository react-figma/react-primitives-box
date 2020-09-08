import * as React from 'react';
import {Spacers} from "./Spacers";
import {Colors} from "./Colors";
import {Flex} from "../../reflexbox";
import {Typography} from "./Typography";
import {Page} from "react-figma";

const DesignSystem = () => {
    return <Page name="design system" style={{flexDirection: "row"}}>
        <Typography style={{marginRight: 50}} />
        <Colors style={{marginRight: 50}} />
        <Spacers />
    </Page>
}

export { DesignSystem };
