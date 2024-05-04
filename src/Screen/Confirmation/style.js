import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding: 20
    },
    heading : {
        fontFamily : 'Poppins-Bold',
        color : colors.black,
        fontSize :  25,

    },
    desc : {
        fontFamily: 'Poppins-Regular',
        fontSize : 16,
        color : colors.black
    },

})
export default style