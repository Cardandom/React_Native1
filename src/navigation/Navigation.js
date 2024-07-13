import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/Account';
import AnimalsScreen from '../screens/Animals';
import Favorite from '../screens/Favorite';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Account' component={AccountScreen}/>
        <Tab.Screen name='Animal' component={AnimalsScreen}/>
        <Tab.Screen name='Favorite' component={Favorite}/>
    </Tab.Navigator>
  )
}

export default Navigation