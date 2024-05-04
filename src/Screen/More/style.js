import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const style = StyleSheet.create({
    profileOuterContainer : {
        backgroundColor : colors.white,
        padding :  15,
       

    },
    profileInnerContainer :{
        flexDirection: 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    profileConntainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    avatar :{
        height : wp('20%'),
        width : wp('20%'),
        borderRadius : wp('30%') *0.5,
        backgroundColor : colors.primaryGreen
    },
    name : {
        fontFamily : 'Poppins-Bold',
        fontSize : 30,
        color : colors.black
    },
    txt : {
        fontFamily : 'Poppins-Regular',
        fontSize : 18
    },
    detailContainer : {
        marginTop : 30,
        paddingHorizontal :  15,
        backgroundColor : colors.white,
        flex : 1
    },
    listContainer :{
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        borderBottomWidth : StyleSheet.hairlineWidth,
        borderBottomColor : colors.grey,
        padding :  20,
    },
    listTxt : {
        fontFamily : 'poppins-Regular',
        fontSize : 18,
        color : colors.black
    },

})
export default style