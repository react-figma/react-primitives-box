import * as React from 'react';
import { ThemeContext } from "styled-components/primitives";
import {Component, Frame, View, StyleSheet, Text} from "react-figma";
import {HeadingH2} from "./HeadingH2";

const styles = StyleSheet.create({
    text: {
        color: "#000000"
    },
    textContainer: {
        marginBottom: 55
    },
    container: {
        marginTop: 50,
    }
})

const Typography = (props) => {
    const {style} = props;
    const themeContext = React.useContext(ThemeContext);
    const text = themeContext.text;
    const textKeys = Object.keys(text);

    return <Frame name="typography" style={style} >
        <HeadingH2 text="typography" />
        <View style={styles.container}>
            {textKeys.map((key) => {
                const textValue = text[key];
                return <View style={styles.textContainer} key={key}>
                    <Component name={key}>
                        <Text style={[styles.text, textValue]}>
                            {key}
                        </Text>
                    </Component>
                </View>
            })}
        </View>
    </Frame>
}

export { Typography };
