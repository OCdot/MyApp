import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import style from './style';
import Logo from '../../Common/Logo';
import CustomButton from '../../Common/CustomButton';
import auth from '@react-native-firebase/auth';
import {useEffect, useRef, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import colors from '../../assets/colors/colors';

const Otp = () => {
  const route = useRoute();
  const {phone, email, name, password} = route.params;
  const userData = {
    phone: phone,
    email: email,
    name: name,
    password: password,
  };
  const [otp, setOtp] = useState(['', '', '', '']);
  const textInputRefs = useRef([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [confirm, setConfirm] = useState(null);
  // const [code, setCode] = useState('');
  const [confirmation, setConfirmation] = useState(null);
  const navigation = useNavigation();

  const sendOTP = async () => {
    try {
      // const confirmation = await auth().signInWithPhoneNumber(phone);
      const confirmation = '1234';
      setConfirmation(confirmation);
    } catch (error) {
      console.log('Error sending OTP:', error);
      // Alert.alert('Error', 'Failed to send OTP. Please try again.');
    }
  };

  useEffect(() => {
    sendOTP();
  }, []);

  const handleVerify = async () => {
    const enteredOTP = otp.join('');
    console.warn(enteredOTP);
    console.warn('CONFIRM', confirmation);
    try {
      // await confirmation.confirm(enteredOTP);
      if (confirmation === enteredOTP) {
        await firestore().collection('Users').add(userData).then(resp =>{
          Snackbar.show({
            text : 'Success..',
            duration : Snackbar.LENGTH_SHORT,
            backgroundColor : colors.primaryGreen,
            textColor : colors.white
          })
        })
        navigation.navigate('Address');
      }

      // OTP verification successful, handle further actions
      console.log('OTP verification successful');
    } catch (error) {
      console.error('Error verifying OTP:', error);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  const handleOnChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text.length === 1 && index < otp.length - 1) {
      textInputRefs.current[index + 1].focus();
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        style={style.background}
        source={require('../../assets/images/background.jpg')}>
        <Logo />

        <View style={{marginTop: 40}}>
          <Text style={style.heading}>Verification...</Text>
          <Text style={style.desc}>
            available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which
          </Text>
        </View>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <Image
            style={style.img}
            source={require('../../assets/images/one-time-password.png')}
          />
          <Text style={[style.heading, {alignSelf: 'center', marginTop: 30}]}>
            OTP
          </Text>
        </View>
        <View style={style.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (textInputRefs.current[index] = ref)}
              keyboardType={'phone-pad'}
              style={style.TextInput}
              maxLength={1}
              value={digit}
              onChangeText={text => handleOnChangeText(text, index)}
            />
          ))}
        </View>
        <Text style={style.resend}>Resend OTP</Text>
        <View style={{alignSelf: 'center', marginTop: 50}}>
          <CustomButton text="Verify" handleButtonPress={handleVerify} />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default Otp;
