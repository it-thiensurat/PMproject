import React from 'react'
import {
    View,
    Text,
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    darkColor,
    lightColor,
    primaryColor,
    secondaryColor,
    transparentGray
} from '../utils/contants'
import styles from '../style/style'

import Menu from './tabs/MenuScreen'
import Profile from './tabs/ProfileScreen'

const Tab = createBottomTabNavigator();
export default function MainTab() {
    return (
        <Tab.Navigator
            initialRouteName="Menu"
            // tabBarOptions={{
            //     activeTintColor: secondaryColor,
            //     inactiveTintColor: 'gray',
            // }}
            screenOptions = {({ route }) =>({
                tabBarActiveTintColor: secondaryColor,
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: [
                  {
                    display: "flex"
                  },
                  null
                ],
            tabBarIcon: ({ color }) => 
            screenOptions(route, color),
              
          })}
            style={{ backgroundColor: 'white' }}>
            <Tab.Screen
                name="Process"
                component={Menu}
                options={{
                    // tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View style={[styles.bottomTab]}>
                            <Icon name="grip-horizontal" color={color} size={25} />
                        </View> 
                    ),
                    headerShown: false
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    // tabBarLabel: '',
                    tabBarIcon: ({ color }) => (
                        <View style={[styles.bottomTab]}>
                            <Icon name="user" color={color} size={25} />
                        </View>
                    ),
                    headerShown: false
                }} />
        </Tab.Navigator>
    )
}