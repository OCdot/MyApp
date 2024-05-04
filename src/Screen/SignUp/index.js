import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import style from './style';
import Customtextinput from '../../Common/CustomTextInput';
import Logo from '../../Common/Logo';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../Common/CustomButton';
import {useState} from 'react';
import Snackbar from 'react-native-snackbar';
import colors from '../../assets/colors/colors';
import {
  validateEmail,
  validatePhoneNumber,
} from '../../Common/Validation/validation';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (name !== '' && phone !== '' && email !== '' && password !== '') {
      if (validateEmail(email) && validatePhoneNumber(phone)) {
        navigation.navigate('Otp', {
          phone: phone,
          email: email,
          name: name,
          password: password,
        });
      } else {
        Snackbar.show({
          text: 'Invalid e-mail or Phone Number..!',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor: colors.danger,
          fontFamily: 'Poppins-Regular',
          textColor: colors.white,
        });
      }
    } else {
      Snackbar.show({
        text: 'Fill up  all Fields to continue..!',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.danger,
        fontFamily: 'Poppins-Regular',
        textColor: colors.white,
      });
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        style={style.background}
        source={require('../../assets/images/background.jpg')}>
        <View style={{marginTop: 5, padding: 25}}>
          <Logo />

          <View style={{marginTop: 35}}>
            <Text style={style.head}>Signup...</Text>
            <Text style={style.desc}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by to use
              a passage of Lorem Ipsum, you need to be sure there isn't anything
              embarrassing hidden in the middle of text.
            </Text>
          </View>
          <Customtextinput
            placeholder="Name"
            handleText={text => setName(text)}
          />
          <Customtextinput
            placeholder="Phone Number"
            keyboard="phone-pad"
            handleText={text => setPhone(text)}
          />
          <Customtextinput
            placeholder="Email"
            keyboard="email-address"
            handleText={text => setEmail(text)}
          />
          <Customtextinput
            placeholder="Password"
            secureTextEntry={true}
            handleText={text => setPassword(text)}
          />
        </View>

        <View style={{marginTop: 20}}>
          <CustomButton text="Signup" handleButtonPress={handleSignUp} />
        </View>

        <View style={{marginTop: 50, alignSelf: 'center'}}>
          <Text
            style={[style.forgot, {fontSize: 16}]}
            onPress={() => navigation.navigate('Login')}>
            Already have an account?
          </Text>
        </View>

        <TouchableOpacity
          style={style.bottomButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.btnTxt}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default SignUp;
