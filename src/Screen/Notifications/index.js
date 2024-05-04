import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import {useState} from 'react';

const Notifications = () => {
  const navigation = useNavigation();
  const [selectedNotification, setSelectedNotification] = useState(0);

  const Notification = [
    {
      key: 0,
      name: 'Notify me on every process',
    },
    {
      key: 1,
      name: 'Notify me only at the time of Delivery',
    },
    {
      key: 2,
      name: 'All Notification',
    },
  ];

  const handleNotificationSelect = index => {
    setSelectedNotification(index);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.back} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={35} color={colors.black} />
      </TouchableOpacity>
      <View style={{marginTop: 15}}>
        <Text style={style.heading}>Notifications</Text>
        <Text style={style.txt}>Select Your Notification Preference</Text>
      </View>
      <FlatList
        data={Notification}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{marginTop: 15}}
        renderItem={({item, index}) => {
          // console.warn(item);
          return (
            <View style={style.innerContainer}>
              <View style={style.radioContainer}>
                <TouchableOpacity
                  onPress={() => handleNotificationSelect(index)}
                  style={style.radioButton}>
                  {selectedNotification === index && (
                    <View style={style.radioInnerCircle} />
                  )}
                </TouchableOpacity>
              </View>
              <View style ={{marginLeft : 20}}>
                <Text style={style.name}>{item.name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Notifications;
