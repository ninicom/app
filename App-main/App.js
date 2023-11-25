import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Home';
import ScanScreen from './Scan';
import CartScreen from './Cart';

// Placeholder screen component
const PlaceholderScreen = ({ route }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>{route.name} Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
          headerShown: false,
        }}
      tabBarOptions={{
          showLabel: false,}}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./assets/HomeActive.png') : require('./assets/Home.png')} style={styles.logo} />
            ),
          }}
        />
        <Tab.Screen 
          name="Notification" 
          component={PlaceholderScreen} 
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Bell.png')} style={styles.logo} />
            ),
          }}
        />
        <Tab.Screen 
          name="Scan New" 
          component={ScanScreen} 
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Vector.png')} style={styles.logo} />
            ),
          }}
        />
        <Tab.Screen 
          name="Recent" 
          component={PlaceholderScreen} 
          options={{
            tabBarIcon: () => (
              <Image source={require('./assets/Recent.png')} style={styles.logo} />
            ),
          }}
        />
        <Tab.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={focused ? require('./assets/CartActive.png') : require('./assets/Cart.png')} style={styles.logo} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo:{
    width: 24, 
    height: 24,
    resizeMode: 'contain',
  },
}) 

export default App;
