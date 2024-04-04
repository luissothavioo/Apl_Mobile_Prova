import { StyleSheet} from 'react-native';
import { colors } from '../../styles/GlobalStyles';

export const styles = StyleSheet.create({
    ball: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: colors.primaryLight,
        borderWidth: 5,
        borderColor: colors.primary,
    },
    buttonText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: -5
    },
  });