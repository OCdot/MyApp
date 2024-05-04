import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import style from './style';
import { useNavigation } from '@react-navigation/native';
import CommonHeader from '../../Common/Common Header';

const Home = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={style.mainContainer}>
      <View>
        <CommonHeader heading = 'Our Services' />

        <TouchableOpacity onPress={() => {navigation.navigate('Services')}}>
          <Text style={style.desc}>
            it has a more-or-less normal distribution of letters, as opposed to
            use Lorem Ipsum as their default model text
          </Text>
          <Image
            style={style.img}
            source={require('../../assets/images/washing.jpg')}
          />
          <Text style={style.heading}>Hand Wash</Text>
        </TouchableOpacity>

        <View style={{marginVertical: 50}}>
          <TouchableOpacity>
            <Image
              style={style.img}
              source={require('../../assets/images/washing1.jpg')}
            />
            <Text style={style.heading}>Next Service</Text>
            <Text style={style.desc}>
              it has a more-or-less normal distribution of letters, as opposed
              to using 'Content here, content here', making it look like
              readable
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
