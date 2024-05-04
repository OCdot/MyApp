import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import Slider from '../Slider';
import Login from '../Login';
import SignUp from '../SignUp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomFooter from '../../Components/CustomFooter';
import Home from '../Home';
import Services from '../Home/Services';
import Washing from '../Washing';
import Otp from '../OTP';
import Address from '../Address';
import History from '../History';
import More from '../More';
import Map from '../Address/Map';
import Confirmation from '../Confirmation';
import Profile from '../Profile';
import SavedAddress from '../Saved Address';
import SavedCards from '../Cards';
import Notifications from '../Notifications';
import {store} from '../../Redux/store';
import {Provider, useSelector} from 'react-redux';
import {useEffect} from 'react';

const AppNav = () => {
  const AppStack = createNativeStackNavigator();
  const {isLoggedIn} = useSelector(state => state);

  useEffect(() => {}, [isLoggedIn]);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {isLoggedIn ? (
          <AppStack.Screen
            options={{headerShown: false}}
            name="AppFooter"
            component={AppFooter}
          />
        ) : (
          <AppStack.Screen
            options={{headerShown: false}}
            name="Slider"
            component={Slider}
          />
        )}

        <AppStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <AppStack.Screen
          component={Otp}
          name="Otp"
          options={{headerShown: false}}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={Services}
          name="Services"
        />

        <AppStack.Screen
          options={{headerShown: false}}
          name="Address"
          component={Address}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={Map}
          name="Map"
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={Confirmation}
          name="Confirmation"
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={Profile}
          name="Profile"
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={SavedAddress}
          name="SavedAddress"
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={SavedCards}
          name="SavedCards"
        />
        <AppStack.Screen
          options={{headerShown: false}}
          component={Notifications}
          name="Notifications"
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

const Footer = createBottomTabNavigator();
const AppFooter = () => {
  return (
    <Footer.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomFooter {...props} />}>
      <Footer.Screen name="Home" component={Home} />
      {/* <Footer.Screen component={Services} name="Services" /> */}
      <Footer.Screen component={Washing} name="Washing" />
      <Footer.Screen component={History} name="History" />
      <Footer.Screen component={More} name="More" />
    </Footer.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  );
};

export default App;
