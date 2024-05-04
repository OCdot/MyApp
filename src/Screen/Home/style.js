import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";


const style = StyleSheet.create({
    mainContainer :{
        padding : 15,
    },
    headView : {
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginTop : 30
    },
    headTxt : {
        fontFamily : 'Poppins-Bold',
        color : colors.black,
        fontSize : 38,
        
    },
    desc : {
        paddingVertical : 15,
        fontFamily : 'Poppins-Regular',
        color : colors.black_lvl_2,
        fontSize : 16
    },
    img : {
        height : hp('30%'),
        width : wp('100%'),
        resizeMode : 'stretch',
        borderTopLeftRadius: 25,
        borderTopRightRadius : 25,
        borderBottomLeftRadius : 25,
        borderBottomRightRadius :25
    },
    heading : {
        fontFamily : 'poppins-Regular',
        color : colors.black_lvl_1,
        fontSize : 36
    }

})

export default style