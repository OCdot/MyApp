import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";

const style= StyleSheet.create({
    btn : {
        backgroundColor : colors.lightGreen_1,
        height : hp('7%'),
        width : wp('45%'),
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center'
    },
    text : {
        color : colors.primaryGreen,
        fontFamily : 'Poppins-Regular',
        fontSize : 18
    }

})

export default style