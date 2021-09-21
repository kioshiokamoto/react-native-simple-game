import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
export default function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <Text>El juego a terminado</Text>
            <Text>Número de rondas: {props.roundsNumber}</Text>
            <Text>El número era el: {props.userNumber}</Text>
            <Button title="Nuevo Juego" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
