import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import {useState} from 'react';

const SavedAddress = () => {
  const navigation = useNavigation();
  const [selectedAddress, setSelectedAddress] = useState(0);

  const Address = [
    {
      key: 0,
      name: 'Home',
      desc: 'Near Kannur Intl Airport',
    },
    {
      key: 1,
      name: 'Home2',
      desc: 'Near Kannur Intl Airport',
    },
    {
      key: 2,
      name: 'Home3',
      desc: 'Near Kannur Intl Airport',
    },
  ];

  const handleAddressSelect = index => {
    setSelectedAddress(index);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.back} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={35} color={colors.black} />
      </TouchableOpacity>
      <View style={{marginTop: 15}}>
        <Text style={style.heading}>Address</Text>
        <Text style={style.txt}>Choose Your Default Pickup Address</Text>
      </View>
      <FlatList
        data={Address}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{marginTop: 15}}
        renderItem={({item, index}) => {
          // console.warn(item);
          return (
            <View style={style.innerContainer}>
              <View style={style.radioContainer}>
                <TouchableOpacity
                  onPress={() => handleAddressSelect(index)}
                  style={style.radioButton}>
                  {selectedAddress === index && (
                    <View style={style.radioInnerCircle} />
                  )}
                </TouchableOpacity>
              </View>
              <View style ={{marginLeft : 20}}>
                <Text style={style.name}>{item.name}</Text>
                <Text style={style.desc}>{item.desc}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default SavedAddress;
