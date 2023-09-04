import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react'
import Home from './Components/Home';
import Daily from './Components/Daily';
import LoginPage from './Components/LoginPage';
import { CartProvider } from './context/shop-context';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <CartProvider>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Daily" component={Daily}/>
      <Stack.Screen name="Login">
          {({navigation}) => (
            <LoginPage isVisible={true} onClose={() => navigation.goBack()} />
          )}
      </Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  )
}

export default App

const styles = StyleSheet.create({})