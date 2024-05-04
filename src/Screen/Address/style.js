import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
    container : {
        padding: 15,
        // backgroundColor : colors.black
    },
    heading :{
        fontFamily : 'Poppins-Bold',
        color : colors.black,
        fontSize: 30,
        marginTop: 10
    },
    desc : {
        fontFamily : 'Poppins-Regular',
        fontSize: 16,
        color : colors.black,
        marginTop: 10
    }

})
export default style