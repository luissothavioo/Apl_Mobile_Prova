import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    //tela
    container: {
        flex: 1,
    },

    //texto
    texto: {
        fontSize: 27,
        color: colors.black,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.black,
    },

    //elementos
    textDiv: {
        flexDirection: 'row',
    },
    card: {
        width: 300,
        height: 700,
        backgroundColor: colors.primaryLight,
        borderRadius: 20,
    },
});