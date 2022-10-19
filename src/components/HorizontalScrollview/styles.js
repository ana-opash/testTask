import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../theme/fonts";


export default Styles = StyleSheet.create({
    root: {
        height: hp('12%'),
        width: wp('100%'),
        
        // borderWidth: 0,
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
    },
    container: {
        //backgroundColor: 'white',
    }
});