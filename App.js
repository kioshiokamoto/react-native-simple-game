import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";

export default function App() {
    return (
        <View style={styles.screen}>
            <Header title="Adivina un número" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
