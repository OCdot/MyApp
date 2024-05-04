import {SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import style from './style';
import {useEffect, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import colors from '../../../assets/colors/colors';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import CustomButton from '../../../Common/CustomButton';

const Map = () => {
  const [address, setAddress] = useState('');
  const [newPosition, setNewPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getCurrentLoction = () => {
    Geolocation.getCurrentPosition(info => {
      setNewPosition({
        latitude: info.coords?.latitude ?? 0,
        longitude: info.coords?.longitude ?? 0,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
      Snackbar.show({
        text: 'Current Location is Fetched',
        backgroundColor: colors.primaryGreen,
        textColor: colors.white,
        duration: Snackbar.LENGTH_SHORT,
      });
    });
  };

  useEffect(() => {
    getCurrentLoction();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <GooglePlacesAutocomplete
        placeholder="Search location"
        currentLocation={true}
        fetchDetails={true}
        currentLocationLabel="Current Location"
        query={{
          key: 'AIzaSyBxr99617iBz0j-ao6GzTTl_Kq0TuvZwg4',
          language: 'en',
        }}
        styles={{
          textInput: style.textInput,
          predefinedPlacesDescription: style.description,
        }}
        onPress={(data, details) => {
          console.warn(data, details);

          const location =
            data?.geometry?.location ?? details?.geometry?.location;
          const positionData = {
            latitude: location?.lat ?? 0,
            longitude: location?.lng ?? 0,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          };
          setNewPosition(positionData);
          setAddress(data.name ?? data.description);
        }}
        // onFail={fail => console.warn('fail', fail)}
        // onNotFound={notfound => console.warn('not found', notfound)}
      />

      <MapView
        style={style.mapView}
        initialRegion={newPosition}
        region={newPosition}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomControlEnabled={true}
        pitchEnabled={true}
        scrollEnabled={true}
        rotateEnabled={true}
        currentLocationLabel="Current Location"
        showsMyLocationButton={true}>
        <Marker
          title={address}
          coordinate={newPosition}
          description="You Are Here"
        />
      </MapView>
      {address && (
        <View style={{paddingHorizontal: 15}}>
          <Text
            style={{
              color: colors.black_lvl_3,
              fontFamily: 'Poppins-Regular',
            }}>
            {address}
          </Text>
        </View>
      )}

      <TouchableOpacity style ={style.btn}>
        <Text style ={style.txt}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Map;
