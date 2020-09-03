import * as React from 'react';
import {Text, StyleSheet, Line} from "react-figma";

const styles = StyleSheet.create({
    text: {
        fontFamily: "Roboto",
        fontWeight: "900",
        lineHeight: "150%",
        fontSize: 96,
        marginTop: 24
    }
})

export const HeadingH2 = (props: {text?: string}) => {
    const {text} = props;
    return <>
        <Text style={styles.text}>
            {text}
        </Text>
        <Line width={802}
              strokeWeight={10}
              strokeAlign="CENTER"
              strokes={[{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }]} />
    </>
};
