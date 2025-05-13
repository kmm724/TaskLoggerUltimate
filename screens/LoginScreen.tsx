import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login as:</Text>
      <Button title="General Contractor" onPress={() => navigation.navigate('HomeGC')} />
      <Button title="Supervisor" onPress={() => navigation.navigate('HomeSupervisor')} />
      <Button title="Laborer" onPress={() => navigation.navigate('HomeLaborer')} />
    </View>
  );
};

export default LoginScreen;
