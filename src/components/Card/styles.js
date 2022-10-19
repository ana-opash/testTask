import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../theme/fonts";


export default Styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
        width: wp('20%'),
        height: wp('20%'),
        borderWidth: 0,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardText: {
        color: 'gray',
        fontSize: fonts?.size?.font14,
        marginVertical: 2
    },
    downloadIconRoot: {
        bottom: -wp('10%'),
        right: -wp('14%'),
    }
});