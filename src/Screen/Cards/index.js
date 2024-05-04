import {useNavigation} from '@react-navigation/native';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../assets/colors/colors';
import {useState} from 'react';

const SavedCards = () => {
  const navigation = useNavigation();
  const [selectedCard, setSelecteCard] = useState(0);

  const Cards = [
    {
      key: 0,
      name: 'Axis Bank',
      desc: '53XX XXXX XXX 9870',
    },
    {
      key: 1,
      name: 'South Indian Bank',
      desc: '83XX XXXX XXX 0971',
    },
    {
      key: 2,
      name: 'State Bank od India',
      desc: '90XX XXXX XXX 3678',
    },
  ];

  const handleCardSelect = index => {
    setSelecteCard(index);
  };

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.back} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={35} color={colors.black} />
      </TouchableOpacity>
      <View style={{marginTop: 15}}>
        <Text style={style.heading}>Saved Cards</Text>
        <Text style={style.txt}>Choose Your Default Payment Card</Text>
      </View>
      <FlatList
        data={Cards}
        keyExtractor={(item, index) => String(index)}
        contentContainerStyle={{marginTop: 15}}
        renderItem={({item, index}) => {
          // console.warn(item);
          return (
            <View style={style.innerContainer}>
              <View style={style.radioContainer}>
                <TouchableOpacity
                  onPress={() => handleCardSelect(index)}
                  style={style.radioButton}>
                  {selectedCard === index && (
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
export default SavedCards;
