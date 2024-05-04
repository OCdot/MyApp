import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import colors from '../../assets/colors/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { signout } from '../../Redux/action';

const More = () => {
  const navigation =useNavigation()
  const dispatch =useDispatch()

  return (
    <View style ={{flex : 1}}>
      <View style={style.profileOuterContainer}>
        <View style={style.profileInnerContainer}>
          <TouchableOpacity onPress={()=> navigation.navigate('Profile')} style={style.profileConntainer}>
            
            <View style={style.avatar}></View>
            <View style={{marginLeft: 10}}>
              <Text style={style.name}>OC</Text>
              <Text style={style.txt}>View Profile</Text>
            </View>
            
          </TouchableOpacity>
          <Entypo name="bell" size={50} color={colors.black} />
        </View>
      </View>

      <View style={style.detailContainer}>
        <View style={style.listContainer}>
          <Text style={style.listTxt}>Phone Number</Text>
          <Text style={style.listTxt}> 9876543986</Text>
        </View>
        <TouchableOpacity onPress={() =>navigation.navigate('SavedAddress')} style={style.listContainer}>
          <Text style={style.listTxt}>Address</Text>
          <Text style={[style.listTxt,{color: colors.primaryGreen}]}> Mattannur</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate('SavedCards')} style={style.listContainer}>
          <Text style={style.listTxt}>Payments</Text>
          <Text style={[style.listTxt,{color: colors.primaryGreen}]}>Axis Credit Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>navigation.navigate('Notifications')} style={style.listContainer}>
          <Text style={style.listTxt}>Notificatin</Text>
          <Text style={[style.listTxt,{color: colors.primaryGreen}]}> Notify by process</Text>
        </TouchableOpacity>
        <View style={style.listContainer}>
          <Text style={style.listTxt}>Support</Text>
        </View>
        <View style={style.listContainer}>
          <Text style={style.listTxt}>Share</Text>
        </View>
        <View style={style.listContainer}>
          <Text style={style.listTxt}>Terms & Condition</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(signout())} style={style.listContainer}>
          <Text style={[style.listTxt,{color : colors.danger}]}>Signout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default More;
