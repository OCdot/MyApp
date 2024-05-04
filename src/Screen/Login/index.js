import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../../Common/Logo';
import style from './style';
import Customtextinput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../../Redux/action';
import Snackbar from 'react-native-snackbar';
import colors from '../../assets/colors/colors';

const Login = () => {
  const navigation = useNavigation();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  // const {isLoggedIn} = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  // console.warn(isLoggedIn);

  const handleForgotPassword = () => {
    console.warn('OK');
  };

  const handleLogin = async () => {
    // console.warn(password);
    if (loginId.length <= 10)
      await firestore()
        .collection('Users')
        .where('phone', '==', loginId.trim())
        .get()
        .then(async snapshot => {
          if (snapshot.empty) {
            Snackbar.show({
              text: 'Account Not Found',
              duration: Snackbar.LENGTH_SHORT,
              backgroundColor: colors.danger,
              fontFamily: 'Poppins-Regular',
              textColor: colors.white,
            });
          } else {
            snapshot.forEach(documentsnapshot => {
              const respData = documentsnapshot.data();
              if (password.trim() === respData.password) {
                // console.warn(documentsnapshot.id);
                dispatch(
                  login({
                    userId: documentsnapshot.id,
                    name: respData.name,
                    email: respData.email,
                    mobile: respData.phone,
                  }),
                );
                navigation.navigate('AppFooter');
              }else{
                Snackbar.show({
                  text: 'Invalid password',
                  duration: Snackbar.LENGTH_SHORT,
                  backgroundColor: colors.danger,
                  fontFamily: 'Poppins-Regular',
                  textColor: colors.white,
                });
              }
            });
          }
        });
  };

  return (
    <View>
      <ImageBackground
        style={style.background}
        source={require('../../assets/images/background.jpg')}>
        <View style={{marginTop: 5, padding: 5}}>
          <Logo />

          <View style={{marginTop: 35}}>
            <Text style={style.head}>Welcome back!</Text>
            <Text style={style.desc}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text.
            </Text>
          </View>

          <Customtextinput
            placeholder="Phone number/ Email"
            handleText={text => setLoginId(text)}
          />
          <Customtextinput
            placeholder="Password"
            handleText={text => setPassword(text)}
          />

          <Text style={style.forgot} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <CustomButton text="Login" handleButtonPress={handleLogin} />
        </View>

        <View style={{marginTop: 50, alignSelf: 'center'}}>
          <Text
            style={[style.forgot, {fontSize: 16}]}
            onPress={() => navigation.navigate('SignUp')}>
            Need an account ?
          </Text>
        </View>

        <TouchableOpacity
          style={style.bottomButton}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={style.btnTxt}>Signup</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Login;
