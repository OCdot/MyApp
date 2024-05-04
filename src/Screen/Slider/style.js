import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from "react-native-responsive-screen";
import colors from "../../assets/colors/colors";


const style= StyleSheet.create({
  slide: {
    flex: 1,
    
  },
  mainTextContainer :{
    alignSelf :'center',
    // borderWidth : 1,
    paddingLeft : 25
  },
  titleContainer :{
    width : wp('50%')
  },
  title: {
    fontSize: 30,
    // fontWeight: 'bold',
    marginBottom: 20,
    // textAlign: 'center',
    color : colors.white,
    fontFamily : 'Poppins-Bold'
  },
  text: {
    fontSize: 18,
    // textAlign: 'center',
    color : colors.white,
    fontFamily : 'Poppins-Regular'
  },
  image: {
    width: wp('100%'),
    height: hp('58%'),
    // marginBottom: 20,
    paddingTop : 100
  },
  logoContainer :{
    backgroundColor : colors.lightGreen,
    height : hp('5%'),
    width: wp('30%'),
    borderRadius : 5,
    zIndex : 2,
    marginTop :-25,
    marginLeft : 30,
    justifyContent : 'center',
    alignItems : 'center'
  },
  logoTxt : {
    fontSize: 18,
    textAlign: 'center',
    color : colors.white,
    fontFamily : 'Poppins-Regular'
  },
  descContainer : {
    marginTop : -20
  },
  desc : {
    fontSize: 16,
    color : colors.black_lvl_2,
    fontFamily : 'Poppins-Regular',
    padding :25,
  },
  nextButton: {
    color: colors.primaryGreen, 
    fontSize: 18,
  },

})

export default style