import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

const style =StyleSheet.create({
    container : {
        padding :  15,

    },
    descContainer :{
        padding : 15
    },
    desc : {
        fontFamily : 'Poppins-Regular',
        fontSize:  16,
        color : colors.black
    },
    sections : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems :'center',
        borderWidth : 1,
        borderColor : colors.primaryGreen
    },
    sectionTxt : {
        fontSize : 22,
        fontFamily : 'Poppins-Regular',
        color : colors.primaryGreen,
        alignSelf : 'center',
        paddingHorizontal : 20
    },
    flatlistContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,

    },
    time : {
        fontFamily : 'Poppins-Regular',
        color : colors.lightGrey,
        fontSize : 16,
    },
    qty :{
        fontFamily : 'Poppins-Bold',
        fontSize : 16,
        color : colors.black,
    },
    


})
export default style