import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import CommonHeader from '../../Common/Common Header';
import style from './style';
import {useState} from 'react';
import colors from '../../assets/colors/colors';

const History = () => {
  const [status, setStatus] = useState('All');

  const orders = [
    {
      key: 0,
      items: 'Clothes',
      status: 'In Progress',
      amount: '400',
      paymentStatus: 'paid',
      time: '12/5/22 , 09.45 AM',
      qty: 3,
    },
    {
      key: 1,
      items: 'Clothes',
      status: 'Deliverd',
      amount: '600',
      paymentStatus: 'paid',
      time: '01/7/22 , 07.40 AM',
      qty: 3,
    },
    {
      key: 2,
      items: 'Clothes',
      status: 'Deliverd',
      amount: '400',
      paymentStatus: 'paid',
      time: '10/8/22 , 10.45 AM',
      qty: 3,
    },
    {
      key: 3,
      items: 'Clothes',
      status: 'In Progress',
      amount: '400',
      paymentStatus: 'not paid',
      time: '02/5/22 , 12.35 AM',
      qty: 3,
    },
  ];

  const filteredOrders =
    status === 'All' ? orders : orders.filter(order => order.status === status);

  return (
    <View style={style.container}>
      <CommonHeader heading="History" />
      <View style={style.descContainer}>
        <Text style={style.desc}>
          consectetur adipiscing elit. Vestibulum sagittis mi ut risus accumsan
          pharetra. Donec quis enim sollicitudin, gravida augue quis, tristique
          felis. Praesent scelerisque leo ac auctor pharetra. Vestibulum dapibus
          blandit dictum. Mauris eu commod
        </Text>
      </View>
      <View style={style.sections}>
        <Text
          onPress={() => setStatus('All')}
          style={[
            style.sectionTxt,
            {
              backgroundColor: status === 'All' ? colors.primaryGreen : null,
              color: status === 'All' ? colors.white : colors.primaryGreen,
            },
          ]}>
          ALL
        </Text>
        <Text
          onPress={() => setStatus('In Progress')}
          style={[
            style.sectionTxt,
            {
              backgroundColor:
                status === 'In Progress' ? colors.primaryGreen : null,
              color:
                status === 'In Progress' ? colors.white : colors.primaryGreen,
            },
          ]}>
          In Progress
        </Text>
        <Text
          onPress={() => setStatus('Deliverd')}
          style={[
            style.sectionTxt,
            {
              backgroundColor:
                status === 'Deliverd' ? colors.primaryGreen : null,
              color: status === 'Deliverd' ? colors.white : colors.primaryGreen,
            },
          ]}>
          Delivered
        </Text>
      </View>

      <View style ={{marginTop : 20}}>
        <FlatList
          data={filteredOrders}
          renderItem={({item}) => (
            <TouchableOpacity style={style.flatlistContainer}>
              <View>
                <Text style={style.time}>{item.time}</Text>
                <Text style={style.qty}>{item.qty} Quantity</Text>
              </View>
              <View>
                <Text
                  style={[
                    style.time,
                    {
                      color:
                        item.status === 'Deliverd'
                          ? colors.primaryGreen
                          : colors.danger,
                    },
                  ]}>
                  {item.status}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default History;
