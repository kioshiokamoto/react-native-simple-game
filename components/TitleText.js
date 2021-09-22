import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function TitleText(props) {
    return <Text style={styles.title}>{props.children}</Text>;
}
const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontFamily: "open-sans-bold",
        fontSize: 18,
    },
});
