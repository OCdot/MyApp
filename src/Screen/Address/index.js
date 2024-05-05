import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../assets/colors/colors';
import style from './style';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../../Common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';

const Address = () => {
  const [isChecked, setChecked] = useState(false);
  const navigation = useNavigation()

  const handleCheckBox = () => {
    setChecked(!isChecked);
  };

  const handleContinue = () =>{
    navigation.navigate('Login')
    Snackbar.show({
      text: 'Login To Continue',
      duration: Snackbar.LENGTH_SHORT,
      backgroundColor: colors.primaryGreen,
      fontFamily: 'Poppins-Regular',
      textColor: colors.white,
    });
  }

  return (
    <View style={style.container}>
      <View>
        <Text style={style.heading}>Update your resident and continue</Text>
        <Text style={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris
          enim. Aenean pretium luctus nulla, auctor porttitor felis mollis in.
          Morbi hendrerit
        </Text>
      </View>
      <TextInput
        style={{
          height: 140,
          borderColor: 'gray',
          //   borderWidth: 1,
          padding: 10,
          textAlignVertical: 'top',
          paddingTop: 10,
          backgroundColor: colors.lightGrey,
          marginTop: 30,
          marginBottom: 20,
        }}
        placeholder={'Address'}
        multiline={true} // Allow multiple lines
        textAlignVertical={'top'} // Align text at the top of the input
      />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
        
        }}
        onPress={()=> navigation.navigate('Map')}>
        <Entypo name="location-pin" color={colors.primaryGreen} size={40} />
        <Text style={[style.desc, {color: colors.primaryGreen}]}>
          Select Place by Map
        </Text>
      </TouchableOpacity>

      <View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <CheckBox value={isChecked} onValueChange={handleCheckBox} />
          <Text style={[style.desc, {marginLeft: 10}]}>
            I accept the terms and conditions
          </Text>
        </View>

        <View style={{marginTop: 90}}>
          <CustomButton text="Continue" handleButtonPress ={handleContinue}/>
        </View>

        <TouchableOpacity style={{marginTop: 60, alignSelf: 'center'}}>
          <Text style={[style.desc, {color: colors.primaryGreen}]}>
            Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Address;
