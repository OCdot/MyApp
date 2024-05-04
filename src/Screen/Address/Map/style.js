import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../assets/colors/colors';

const style = StyleSheet.create({
    container : {
        // padding : 15,
        marginTop: 70,
    },
  textInput: {
    fontFamily: 'Poppins-Regular',
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    width: wp('70%'),
    height: hp('5%'),
    // padding : 10,
    alignSelf: 'center',
    marginHorizontal: 20,
    // marginTop: 60,
    // zIndex : 1,
    // borderColor: colors.primaryGreen,
    backgroundColor: colors.lightGrey,
  },
  mapView : {
    height : hp('70%'),
    justifyContent :'flex-end',
    alignItems : 'center',
    width :wp('100%'),
    marginVertical : 50,
    // padding : 15,
  },
  btn : {
    backgroundColor : colors.primaryGreen,
    width : wp('100%'),
    height : hp('10%'),
    alignItems : 'center',
    justifyContent : 'center'
  },
  txt : {
    fontFamily : 'Poppins-Regular',
    fontSize : 19,
    color : colors.white,
    alignSelf : 'center'
  }
});

export default style;
