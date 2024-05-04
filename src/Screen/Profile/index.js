// import {useNavigation} from '@react-navigation/native';
// import {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation =useNavigation()

  return (
    <View style={style.container} >
      <View style={style.headerContainer}>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} />
        </TouchableOpacity>
        
        <Text style={style.heading}>Profile</Text>
        <Text onPress={()=> console.warn('EDIT')} style={style.txt}>Edit</Text>
      </View>

      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop : 30,
          marginTop : 50
        }}>
        <View style={style.avatar}></View>
        <Text style={[style.heading, {fontSize: 40}]}>OC</Text>
        <Text>9875643216</Text>
        <Text>ABC House Near AKV Kannur, (p.o) Kannur</Text>
      </View>
      
    </View>
  );
};
export default Profile;
