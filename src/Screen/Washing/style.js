import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp , widthPercentageToDP as wp} from "react-native-responsive-screen";


const style =StyleSheet.create({
    container : {
        padding : 15,
        backgroundColor : colors.new,
        flex :  1
    },
    desc : {
        paddingVertical : 15,
        fontFamily : 'Poppins-Regular',
        color : colors.black_lvl_2,
        fontSize : 16
    },
    smallBox : {
        backgroundColor : colors.primaryGreen,
        justifyContent : 'center',
        alignItems: 'center',
        width : wp('19%'),
        marginTop : -10,
        position : 'absolute',
        zIndex : 22,
        marginLeft : 15
        
    },
    // mapInuptContainer : {
    //     // backgroundColor : colors.lightGrey,
    //     height : hp('7%'),
    //     padding : 5,
    //     marginBottom : 20,
    // },
    inputTxt :{
        height : hp('7%'),
        fontFamily : 'Poppins-Regular',
        fontSize : 18,
    },
    txt : {
        color : colors.white,
        fontFamily : 'Poppins-Regular',
        fontSize : 16
    },
    note : {
        color : colors.black,
        fontFamily : 'Poppins-Bold',
        fontSize : 18,
    },
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