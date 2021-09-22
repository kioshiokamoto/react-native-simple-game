import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
export default function GameOverScreen(props) {
    return (
        <View style={styles.screen}>
            <BodyText>El juego a terminado</BodyText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require("../assets/success.png")}
                    style={styles.image}
                    resizeMode="cover"
                />
                <BodyText>Número de rondas: {props.roundsNumber}</BodyText>
                <BodyText>El número era el: {props.userNumber}</BodyText>
                <Button title="Nuevo Juego" onPress={props.onRestart} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, justifyContent: "center", alignItems: "center" },
    image: {
        width: "100%",
        height: "100%",
    },
    imageContainer: {
        width: "300",
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        height: 300,
    },
});
