import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../../assets/colors/colors";

const style =StyleSheet.create({
    img : {
        height : hp('40%'),
        width : wp('100%'),
        resizeMode : 'contain'
    },
    back : {
        marginTop : 30,
        marginLeft : 12
    },
    container : {
        padding : 15,

    },
    heading : {
        fontFamily : 'Poppins-Regular',
        fontSize : 28,
        color : colors.black,
    },
    desc : {
        fontFamily : 'Poppins-Regular',
        fontSize : 16,
        color : colors.grey
    }

})
export default style