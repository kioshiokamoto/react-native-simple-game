import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Card from "../components/Card";
export default function StartGameScreen(props) {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Iniciar un nuevo juego!</Text>
            <Card style={styles.inputContainer}>
                <Text>Escoje un número</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Resetear" onPress={() => {}} />
                    <Button title="Confirmar" onPress={() => {}} />
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
});
