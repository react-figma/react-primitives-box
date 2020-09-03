import * as React from 'react';
import {Spacers} from "./Spacers";
import {Colors} from "./Colors";
import {Flex} from "../../reflexbox";

const DesignSystem = () => {
    return <Flex>
        <Colors style={{marginRight: 50}} />
        <Spacers />
    </Flex>
}

export { DesignSystem };
