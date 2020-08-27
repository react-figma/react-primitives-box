import * as React from 'react';
import { ThemeContext } from "styled-components/primitives";
import {Component, Frame, View, StyleSheet, Text} from "react-figma";

const styles = StyleSheet.create({
    component: {
        marginBottom: 30
    },
    value: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F2994A"
    },
    text: {
        fontFamily: "Roboto",
        fontSize: 12
    }
})

export const Spacers = () => {
    const themeContext = React.useContext(ThemeContext);
    const space = themeContext.space;
    const spaceKeys = Object.keys(space);
    return <Frame name="spacing" >
        {spaceKeys.map((key) => {
            const spaceValue = space[key];

            if (!spaceValue) {
                return;
            }

            return <Component name={"Spacing-" + key} key={key} style={styles.component}>
                <View style={[styles.value, {
                    width: spaceValue,
                    height: spaceValue,
                }]}>
                    <Text style={[styles.text, spaceValue < 16 && {fontSize: spaceValue - 1}]}>
                        {spaceValue}
                    </Text>
                </View>
            </Component>
        })}
    </Frame>
}
