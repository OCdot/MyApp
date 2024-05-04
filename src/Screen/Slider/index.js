import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useState} from 'react';
import colors from '../../assets/colors/colors';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const Slider = () => {
  const [slide, setSlide] = useState(false);
  const navigation = useNavigation();
  const [login, setLogin] = useState(true);

  const slides = [
    {
      key: 'slide1',
      title: 'We Clean Your Clothes',
      text: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ',
      image: require('../../assets/images/slide.jpeg'),
      backgroundColor: colors.white_lvl_2,
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    },
    {
      key: 'slide2',
      title: 'We Clean Your Clothes',
      text: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the ',
      image: require('../../assets/images/slide.jpeg'),
      backgroundColor: colors.white_lvl_2,
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.',
    },
  ];

  const onDone = () => {
    navigation.navigate('Login');
  };

  const renderItem = ({item}) => {
    {
      item.key === 'slide1' ? setSlide(false) : setSlide(true);
    }
    return (
      <View style={[style.slide, {backgroundColor: item.backgroundColor}]}>
        <ImageBackground source={item.image} style={style.image}>
          <View style={style.mainTextContainer}>
            <View style={style.titleContainer}>
              <Text style={style.title}>{item.title}</Text>
            </View>
            <Text style={style.text}>{item.text}</Text>
          </View>
        </ImageBackground>
        {item.key === 'slide1' ? (
          <View style={style.logoContainer}>
            <Text style={style.logoTxt}>Laundry.io</Text>
          </View>
        ) : (
          <View style={[style.logoContainer, {backgroundColor: colors.white}]}>
            <Text style={[style.logoTxt, {color: colors.primaryGreen}]}>
              Laundry.io
            </Text>
          </View>
        )}

        <View style={style.descContainer}>
          <Text
            style={[
              style.desc,
              {
                backgroundColor:
                  item.key === 'slide1'
                    ? colors.white_lvl_2
                    : colors.lightGreen,
                height:
                  item.key === 'slide1' ? 'auto' : heightPercentageToDP('50%'),
                color: item.key === 'slide1' ? colors.black : colors.white,
              },
            ]}>
            {item.desc}
          </Text>
        </View>
      </View>
    );
  };
  // console.warn(slide);
  return (
    
    <AppIntroSlider
      nextLabel={<Text style={[style.nextButton]}>Next</Text>}
      activeDotStyle={{
        backgroundColor: slide ? colors.white : colors.primaryGreen,
      }}
      renderItem={renderItem}
      data={slides}
      onDone={onDone}
      doneLabel={
        <Text style={[style.nextButton, {color: colors.white}]}>Done</Text>
      }
    />
  );
};
export default Slider;
