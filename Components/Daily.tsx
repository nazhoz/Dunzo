import {StyleSheet, Text, View, Image,Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stores from './Stores';
import Orders from './Orders';
import Courier from './Courier';
import All from './All';

const Daily = () => {
const Tab = createBottomTabNavigator();
return (
    <View style={{width:'100%',height:'100%'}}>
    <Tab.Navigator
        initialRouteName="Daily"
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"600"
        }

        }}
        >
        <Tab.Screen
        name="Daily"
        component={All}
        options={{
            tabBarIcon: ({focused}) => {
            return (
                <Image
                source={require('./images/navbar/donation.png')}
                style={{tintColor: focused ? 'green' : 'black', width:20,height:20}}
                />
            );
            },
        }}
        />
        <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
            tabBarIcon: ({focused}) => {
            return (
                <Image
                source={require('./images/navbar/store.png')}
                style={{tintColor: focused ? 'green' : 'black', width:20,height:20}}
                />
            );
            },
        }}
        />
        <Tab.Screen
        name="Courier"
        component={Courier}
        options={{
            tabBarIcon: ({focused}) => {
            return (
                <Image
                source={require('./images/navbar/box.png')}
                style={{tintColor: focused ? 'green' : 'black', width:25,height:25}}
                />
            );
            },
        }}
        />
        <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
            tabBarIcon: ({focused}) => {
            return (
                <Image
                source={require('./images/navbar/bag.png')}
                style={{tintColor: focused ? 'green' : 'black', width:20,height:20}}
                />
            );
            },
        }}
        />
    </Tab.Navigator>
    </View>
);
};

export default Daily;

const styles = StyleSheet.create({});
