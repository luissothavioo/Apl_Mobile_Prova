import { View, Text, Image } from 'react-native';
import { ButtonSlide } from '../../components/ButtonSlide'
import { styleContainer } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page1({ setPageI }: IPagina) {
    const vaso = require('../../assets/vasinho.png')
    return (
        <View style={styleContainer.container}>
            <View style={styles.container}>
                <View style={styles.flex}>
                    <Text style={styles.text}>PROVA APLICAÇÕES MOVEIS</Text>
                    <Image source={vaso} style={styles.imagem} />
                    <Text style={styles.texto}>está é a página 1</Text>
                </View>
                <View style={styles.menu}>
                    <ButtonSlide onPressI={() => setPageI(1)} cor={true} />
                    <ButtonSlide onPressI={() => setPageI(2)} cor={false} />
                </View>
            </View>
        </View>
    )
}