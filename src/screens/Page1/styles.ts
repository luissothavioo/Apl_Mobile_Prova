import { StyleSheet } from 'react-native';
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    //tela
    container: {
        flex: 1,
    },
    flex: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //texto
    text: {
        color: colors.white,
        fontSize: 35,
    },
    texto: {
        color: colors.black,
        fontSize: 25,
    },

    //elementos
    menu: {
        flexDirection: 'row',
        marginBottom: 25,
        justifyContent: 'space-around',
    },

    //imagem
    imagem: {
        width: 88,
        height: 126,
    },
});