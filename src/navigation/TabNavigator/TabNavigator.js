import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, ContactStackNavigator } from '../StackNavigator/StackNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={MainStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home-outline" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Contact"
                component={ContactStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="analytics" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator