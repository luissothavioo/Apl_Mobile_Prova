import { TouchableOpacity, TouchableOpacityProps, Text, View } from "react-native";
import { styles } from "./styles"
import React from "react";

interface IButton extends TouchableOpacityProps {
    onPressI: () => void
    signal: String
}
    
export function ButtonSlide({ onPressI, signal}: IButton) {
    return (
        <TouchableOpacity style={styles.ball} onPress={onPressI}>
                <Text style={styles.buttonText}> {signal} </Text>
        </TouchableOpacity>
    )
}