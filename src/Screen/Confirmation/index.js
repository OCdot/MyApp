import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './style';
import colors from '../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
const Confirmation = () => {
    const navigation =useNavigation()

  return (
    <View style={style.container}>
      <AntDesign name="checkcircle" size={60} color={colors.primaryGreen} />
      <Text style={style.heading}>Booking Confirmed</Text>

      <View style={{marginTop: 30}}>
        <Text style={style.desc}>
          consectetur adipiscing elit. Donec sit amet efficitur eros. Donec
          maximus finibus lacus, non tincidunt metus tincidunt sit amet. Nullam
          sollicitudin ornare nibh. Pellentesque eget dui arcu. Morbi faucibus
          auctor augue, eget mattis justo suscipit nec. Quisque eget just
        </Text>
      </View>

      <Text onPress={()=> navigation.navigate('Home')}  style={[style.heading, {color: colors.danger, marginTop: 80}]}>
        Close
      </Text>
    </View>
  );
};

export default Confirmation;
