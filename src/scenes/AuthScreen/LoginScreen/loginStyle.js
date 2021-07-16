import { StyleSheet } from 'react-native';
import * as View from '../../../styles';

const styles = StyleSheet.create({
    container: {
        padding: View.Mixins.calcWidth(4),
        height: View.Mixins.DEVICE_HEIGHT,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#4A4E69',
    },
    inputContainer: {
        top: 10,
        width: '100%'
    },
    card: {
        marginVertical: View.Mixins.DEVICE_HEIGHT - View.Mixins.calcHeight(80),
        height: View.Mixins.DEVICE_HEIGHT - View.Mixins.calcHeight(50),
        backgroundColor: '#fefefe',
    },
    signInText: {
        margin: 8,
        textAlign: 'left'
    },
    forgottenText: {
        margin: 10,
        flexDirection: 'row',
        textAlign: 'right'
    },
    button: {
        marginTop: 8,
        width: '100%'
    },
});

export default styles;
