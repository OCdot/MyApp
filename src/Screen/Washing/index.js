import {Text, TextInput, View} from 'react-native';
import CommonHeader from '../../Common/Common Header';
import style from './style';
import Customtextinput from '../../Common/CustomTextInput';
import CustomButton from '../../Common/CustomButton';
import colors from '../../assets/colors/colors';
import {useEffect, useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import DatePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useNavigation} from '@react-navigation/native';
import Snackbar from 'react-native-snackbar';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';

const Washing = () => {
  const [qty, setQty] = useState(0);
  const [location, setLocation] = useState(null);
  const [dateTime, setDateTime] = useState('');
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);
  const navigation = useNavigation();
  const userId = useSelector(state => state.userId);
  // console.warn(userId);
  const handlePlaceSelect = (data, details) => {
    const selectedLocation = {
      name: data.description,
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    };

    setLocation(selectedLocation);
  };

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };

  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };

  const handleConfirmDateTime = date => {
    setDateTime(date);

    hideDateTimePicker();
  };

  const handleConfirmation = async () => {
    const orderDetails = {
      userId: userId,
      pickupTime: dateTime,
      location: location,
    };
    if (dateTime !== '' && qty !== '') {
      await firestore()
        .collection('Orders')
        .add(orderDetails)
        .then(resp => {
          navigation.navigate('Confirmation')
        });
    } else {
      Snackbar.show({
        text: 'Fill All the Fields',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: colors.danger,
        fontFamily: 'Poppins-Regular',
        textColor: colors.white,
      });
    }
  };

  return (
    <View style={style.container}>
      <View></View>
      <CommonHeader heading="Washing" />
      <View>
        <Text style={style.desc}>
          it has a more-or-less normal distribution of letters, as opposed to
          use Lorem Ipsum as their default model text
        </Text>
      </View>

      <View style={{marginVertical: 15}}>
        <View style={{marginVertical: 10}}>
          <View style={[style.smallBox]}>
            <Text style={style.txt}>When</Text>
          </View>
          {/* <Customtextinput color={colors.grey} onFocus={showDatepicker} /> */}
          <TextInput
            style={style.textInput}
            value={dateTime ? dateTime.toLocaleString() : ''}
            onFocus={showDateTimePicker}
            // onChangeText={text => }
          />
          <DateTimePickerModal
            isVisible={isDateTimePickerVisible}
            mode="datetime"
            onConfirm={handleConfirmDateTime}
            onCancel={hideDateTimePicker}
          />
        </View>
        <View style={{marginVertical: 10}}>
          <View style={[style.smallBox, {marginTop: 10}]}>
            <Text style={style.txt}>From</Text>
          </View>
          {/* <Customtextinput /> */}
          <View style={{marginVertical: 20, marginBottom: 90}}>
            <GooglePlacesAutocomplete
              // placeholder="Search"
              currentLocation={true}
              fetchDetails={true}
              onPress={handlePlaceSelect}
              query={{
                key: 'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
                language: 'en',
              }}
              styles={{
                textInputContainer: style.mapInuptContainer,
                textInput: style.inputTxt,
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
            />
          </View>
        </View>

        <View>
          <View style={style.smallBox}>
            <Text style={style.txt}>Quantity</Text>
          </View>
          <Customtextinput
            keyboard={'number-pad'}
            handleText={text => setQty(text)}
          />
        </View>

        <View style={{alignSelf: 'center', marginTop: 20}}>
          <CustomButton
            handleButtonPress={handleConfirmation}
            text="Confirm Booking"
          />
        </View>
      </View>

      <View style={{marginTop: 60}}>
        <Text style={style.note}>Note:</Text>
        <Text style={[style.desc, {color: colors.grey}]}>
          Price is decided by the pickup man at the time of collecting your
          clothes
        </Text>
      </View>
    </View>
  );
};
export default Washing;
