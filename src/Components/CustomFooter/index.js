import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors/colors';
import {useNavigation} from '@react-navigation/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomFooter = ({state, descriptors, navigation}) => {
  // console.warn(state);
  // const navigation = useNavigation();
  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        // console.warn('ISFOCUSED',isFocused);
        // console.warn('NAME', route.name);
        const icon =
          route.name === 'Home' ? (
            <AntDesign
              name="home"
              size={35}
              color={isFocused ? colors.white : colors.grey}
            />
          ) : route.name === 'Washing' ? (
            <MaterialCommunityIcons
              name="washing-machine"
              size={35}
              color={isFocused ? colors.white : colors.grey}
            />
          ) : route.name === 'History' ? (
            <Octicons
              name="history"
              size={30}
              color={isFocused ? colors.white : colors.grey}
            />
          ) : route.name === 'More' ? (
            <Feather
              name="more-vertical"
              size={35}
              color={isFocused ? colors.white : colors.grey}
            />
          ) : null;
        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}>
            <View
              style={{
                backgroundColor: isFocused ? colors.lightGreen : null,
                height: hp('5%'),
                width: wp('9%'),
                borderRadius: 15,
                alignItems : 'center',
                justifyContent : 'center'
              }}>
              {icon}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomFooter;
