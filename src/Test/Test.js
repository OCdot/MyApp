import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'slide1',
    title: 'Welcome to My App',
    text: 'This is an introduction to my awesome app!',
    image: require('./assets/slide1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'slide2',
    title: 'Features',
    text: 'Discover amazing features that will enhance your experience.',
    image: require('./assets/slide2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'slide3',
    title: 'Get Started',
    text: 'Start using the app now and enjoy!',
    image: require('./assets/slide3.png'),
    backgroundColor: '#22bcb5',
  },
];

const IntroSlide = ({ navigation }) => {
  const onDone = () => {
    // Handle what happens when the user finishes the intro slides, like navigating to the main screen.
    navigation.navigate('MainScreen');
  };

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default IntroSlide;


// ################################################################################


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroSlide from './IntroSlide';
import MainScreen from './MainScreen'; // Import your main screen component

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="IntroSlide" component={IntroSlide} options={{ headerShown: false }} />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
