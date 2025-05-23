import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeGC from '../screens/HomeGC';
import HomeSupervisor from '../screens/HomeSupervisor';
import HomeLaborer from '../screens/HomeLaborer';
import EmployeeManagerScreen from '../screens/EmployeeManagerScreen';
import ClockInOutScreen from '../screens/ClockInOutScreen';
import { RootStackParamList } from './navigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeGC" component={HomeGC} />
      <Stack.Screen name="HomeSupervisor" component={HomeSupervisor} />
      <Stack.Screen name="HomeLaborer" component={HomeLaborer} />
      <Stack.Screen name="EmployeeManager" component={EmployeeManagerScreen} />
      <Stack.Screen name="ClockInOut" component={ClockInOutScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
