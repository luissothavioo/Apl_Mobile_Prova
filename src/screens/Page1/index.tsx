import { View, Text, Image, ImageBackground } from 'react-native';
import { ButtonSlide } from '../../components/ButtonSlide'
import { styleContainer, styleText, styleElements } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page1({ setPageI }: IPagina) {
    const slide = require('../../assets/fundo.png')
    const logo = require('../../assets/logo.png')
    const maior = ">"
    return (
        <ImageBackground source={slide} style={styleContainer.container}>
            <View style={styles.container}>
                <View style={styleContainer.menu}>
                    <View>
                        <Image source={logo} />
                    </View>
                    <View style={styleElements.titleDiv}>
                        <Text style={styleText.textTitle}>Flores</Text>
                    </View>
                    <View>
                        <ButtonSlide onPressI={() => setPageI(2)} signal={">"}></ButtonSlide>
                    </View>
                </View>

                <View style={styleContainer.main}>
                    <View style={styles.card}>
                        <View style={styleElements.campo}>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Rosa:</Text> pode representar gratidão, amizade, pureza e admiração.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Lírio:</Text> pode representar renovação, esperança e fé.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Girassol:</Text> pode representar lealdade, longevidade e adoração.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Orquídea:</Text> pode representar amor, beleza, fertilidade e luxúria.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Margarida:</Text> pode representar amor verdadeiro, alegria e felicidade.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Crisântemo:</Text> pode representar felicidade, longevidade e honra em outras culturas.</Text>
                            </View>
                            <View style={styles.textDiv}>
                                <Text style={styles.bold}>•</Text><Text style={styles.texto}><Text style={styles.bold}> Tulipa:</Text> pode representar amor perfeito, paixão e beleza.</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}