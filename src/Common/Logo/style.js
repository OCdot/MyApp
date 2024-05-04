import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../assets/colors/colors";


const style = StyleSheet.create({
    container :{
        backgroundColor : colors.lightGreen,
        justifyContent : 'center',
        alignItems : 'center',
        height : hp('6%'),
        width : wp('30%'),
        borderRadius : 5,
    },
    txt : {
        fontSize : 18,
        fontFamily: 'Poppins-Bold',
        color : colors.white
    }

})
export default style