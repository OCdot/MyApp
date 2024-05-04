import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems  :'center',
        height : hp('8%'),
        paddingHorizontal : 20,
        // backgroundColor : colors.primaryGreen
    },
    touch : {

    },

})  
export default style