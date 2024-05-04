import { StyleSheet, TextInput } from "react-native";
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from "react-native-responsive-screen";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
    background : {
        width : wp('100%'),
        padding : 15,
        flex : 1 ,
        resizeMode : 'contain',
        height : hp('100%')
    },
    heading : {
        fontFamily : 'Poppins-Bold',
        color : colors.black,
        fontSize : 38
    },
    desc : {
        fontFamily : 'Poppins-regular',
        color : colors.black,
        fontSize : 16
    },
    img : {
        resizeMode : 'stretch',
        height : hp('20%'),
        width : wp('40%')
    },
    otpContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingHorizontal : 20
    },
    TextInput : {
        backgroundColor : colors.white_lvl_3,
        color : colors.primaryGreen,
        height : hp('8%'),
        width: wp('13%'),
        fontSize : 50
    },
    resend : {
        color : colors.primaryGreen,
        fontFamily : 'Poppins-regular',
        fontSize : 16,
        alignSelf : 'flex-end',
        paddingHorizontal : 20,
        marginTop: 10
    }

})
export default style