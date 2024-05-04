import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
const Services = () => {
    const navigation= useNavigation()
  return (
    <ScrollView>
      <ImageBackground
        style={style.img}
        source={require('../../../assets/images/washing.jpg')}>
        <TouchableOpacity style ={style.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={50} color={colors.black} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={style.container}>
        <View>
          <Text style={style.heading}>Hand Wash</Text>
          <Text style={style.desc}>
            it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English
          </Text>
        </View>

        <View>
          <Text style={style.heading}>Advantages</Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
        </View>

        <View>
          <Text style={style.heading}>Drawbacks</Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
          <Text style={style.desc}>
            There are many variations of passages of Lorem
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Services;
