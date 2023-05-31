import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SearchScreen from './screens/SearchScreen';
import NearbyRestaurants from './screens/NearbyRestaurants';
import FactureScreen from './screens/FactureScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cart">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NearbyRestaurants" component={NearbyRestaurants} options={{headerShown: false}}/>
        <Stack.Screen name="Facture" component={FactureScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Cart' component={CartScreen} options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;