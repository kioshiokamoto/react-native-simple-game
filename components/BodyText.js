import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function BodyText(props) {
    return <Text style={styles.body}>{props.children}</Text>;
}
const styles = StyleSheet.create({
    body: {
        fontFamily: "open-sans",
    },
});
