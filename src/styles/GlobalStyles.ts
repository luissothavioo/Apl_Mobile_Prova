import { StyleSheet } from "react-native";

export const colors = {
    primary: '#C62828',
    primaryLight: 'rgba(238, 148, 146, 0.8)',
    secondary: '#E7DA26',
    secondaryLight: 'rgba(241, 234, 139, 0.8)',
    black: '#000',
    white: '#FFF',
}

export const styleContainer = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
    },
    menu: {
        flexDirection: 'row',
        marginTop: 60,
        alignItems: 'center',
    },
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export const styleText = StyleSheet.create({
    textTitle: {
        color: colors.black,
        fontSize: 50,
        fontWeight: 'bold',
    },
})
export const styleElements = StyleSheet.create({
    titleDiv: {
        paddingLeft: 50,
        paddingRight: 50,
    },
    campo: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
})