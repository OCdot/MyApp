import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../assets/colors/colors";


const style = StyleSheet.create({
    background : {
        height : hp('100%'),
        width : wp('100%'),
        resizeMode : 'contain',
        // padding : 15,
        
    },
    head : {
        fontSize : 38,
        fontFamily : 'Poppins-Bold',
        color : colors.black
    },
    desc : {
        fontFamily : 'Poppins-Regular',
        fontSize : 14,
        color : colors.black,
        marginBottom : 30
    },
    forgot : {
        // justifyContent : 'flex-end'
        alignSelf : 'flex-end',
        color : colors.black,
        fontFamily : 'Poppins-Regular',
        fontSize : 14
    },
    bottomButton : {
        width : wp('100%'),
        height : hp('9%'),
        backgroundColor : colors.primaryGreen,
        position: 'absolute',
        bottom:0,
        left:0,
        justifyContent : 'center',
        alignItems :'center'
    },
    btnTxt : {
        color : colors.white,
        fontFamily : 'Poppins-Regular',
        fontSize : 24
    }
})
export default style