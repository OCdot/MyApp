import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";


const style = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white,
        paddingHorizontal : 15,
        
    },
    headerContainer : {
        flexDirection :'row',
        justifyContent :'space-between',
        paddingVertical : 20

    },
    heading : {
        fontFamily : 'Poppins-Bold',
        fontSize : 18,
        color : colors.black
    },
    txt : {
        fontFamily : 'Poppins-Regular',
        fontSize : 16,
        color : colors.primaryGreen
    },
    avatar :{
        height : wp('20%'),
        width : wp('20%'),
        borderRadius : wp('30%') *0.5,
        backgroundColor : colors.primaryGreen
    },

})
export default style