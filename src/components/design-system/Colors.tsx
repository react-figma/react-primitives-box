import * as React from 'react';
import { ThemeContext } from "styled-components/primitives";
import {Component, Frame, View, StyleSheet, Text} from "react-figma";
import {HeadingH2} from "./HeadingH2";

const styles = StyleSheet.create({
    color: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 60
    },
    container: {
        marginTop: 50,
        flexDirection: "row"
    }
})

const Colors = (props) => {
    const {style} = props;
    const themeContext = React.useContext(ThemeContext);
    const colors = themeContext.colors;
    const colorsKeys = Object.keys(colors);

    return <Frame name="colors" style={style} >
        <HeadingH2 text="colors" />
        <View style={styles.container}>
            {colorsKeys.map((key) => {
                const colorValue = colors[key];
                console.log(colorsKeys, colorValue, key);

                if (!colorValue) {
                    return;
                }

                return <View style={[styles.color, {backgroundColor: colorValue}]} />
            })}
        </View>
    </Frame>
}

export { Colors };
