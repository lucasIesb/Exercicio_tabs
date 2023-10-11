import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { FaHome, FaComments } from 'react-icons/fa'; 

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon;

          if (route.name === 'Home') {
            icon = <FaHome size={size} color={color} />;
          } else if (route.name === 'Comentários') {
            icon = <FaComments size={size} color={color} />; 
          }

          return icon;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Comentários" component={SettingsScreen} /> 
    </Tab.Navigator>
  );
};

export default AppNavigator;

