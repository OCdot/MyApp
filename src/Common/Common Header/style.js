import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const style = StyleSheet.create({
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
})
export default style