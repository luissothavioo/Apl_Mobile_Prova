import { View, Text, Image, ImageBackground } from 'react-native';
import { ButtonSlide } from '../../components/ButtonSlide'
import { styleContainer, styleElements, styleText } from "../../styles/GlobalStyles"
import { styles } from "./styles"
import { IPagina } from "../../../App";

export function Page2({ setPageI }: IPagina) {
    const logo = require('../../assets/logo.png')
    const img1 = require('../../assets/img1.png')
    const img2 = require('../../assets/img2.png')
    return (
        <View style={styleContainer.container}>
            <View style={styles.container}>
                <View style={styleContainer.menu}>
                    <View>
                        <ButtonSlide onPressI={() => setPageI(1)} signal={"<"}></ButtonSlide>
                    </View>
                    <View style={styleElements.titleDiv}>
                        <Text style={styleText.textTitle}>Flores</Text>
                    </View>
                    <View>
                        <Image source={logo} />
                    </View>
                </View>

                <View style={styleContainer.main}>
                    <View style={styles.card}>
                        <View style={styleElements.campo}>
                            <View style={styles.cardImage}>
                                <Image source={img1} style={styles.image}/>
                                <Text style={styles.texto}>Chanana</Text>
                            </View>
                            <View style={styles.cardImage}>
                                <Image source={img2} style={styles.image}/>
                                <Text style={styles.texto}>Lírio</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}