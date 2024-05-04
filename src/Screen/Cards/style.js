import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
    container  : {
        flex : 1,
        backgroundColor : colors.white,
        padding : 15,
        
    },
    back : {
        // marginTop : 13
    },
    heading : {
        fontFamily : 'Poppins-Bold',
        fontSize : 40,
        color : colors.black
    },
    txt : {
        fontFamily : 'Poppins-Regular',
        fontSize : 16,

        color : colors.black_lvl_3
    },
    innerContainer :{
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : colors.lightGrey,
        flexDirection  : 'row'
    },
    name : {
        fontFamily : 'Poppins-Regular',
        fontSize : 18,
        color : colors.grey
    },
    desc : {
        fontFamily : 'Poppins-Bold',
        fontSize : 16,
        color : colors.black
    },
    radioContainer: {
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    radioButton: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: colors.primaryGreen,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
      },
      radioInnerCircle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: colors.primaryGreen,
      },

})
export default style