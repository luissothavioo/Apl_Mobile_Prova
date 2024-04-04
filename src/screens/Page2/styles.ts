import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    //tela
    container: {
        flex: 1,
    },
    cardImage: {
        width: 260,
        height: 350,
    },

    //texto
    texto: {
        fontSize: 40,
        color: colors.black,
        textAlign: 'center',
    },

    //elementos
    card: {
        width: 300,
        height: 700,
        backgroundColor: colors.secondaryLight,
        borderRadius: 20,
    },

    //imagem
    image: {
        width: 260,
        height: 240,
    }
});