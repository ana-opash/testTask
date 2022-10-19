import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import fonts from "../../theme/fonts";


export default Styles = StyleSheet.create({
    titleText:{
        color:'black',
        fontSize:fonts?.size?.font18,
        marginVertical:5,
        fontWeight:'bold'
    }
});