import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from "react-native-responsive-screen";


const style = StyleSheet.create({
    textInput : {
        backgroundColor : colors.white_lvl_2,
        height : hp('7%'),
        padding : 5,
        fontFamily : 'Poppins-Regular',
        fontSize : 18,
        marginBottom : 20,
        // borderWidth : 1
    },
    
})
export default style