import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';
import { useAppContext } from '../contexts/AppContext';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { setActiveUser } = useAppContext();

  const handleLogin = (role: 'GC' | 'Supervisor' | 'Laborer') => {
    setActiveUser({
      id: 'temp-id', // Replace with real user management later
      name: role,
      role,
    });

    if (role === 'GC') navigation.navigate('HomeGC');
    if (role === 'Supervisor') navigation.navigate('HomeSupervisor');
    if (role === 'Laborer') navigation.navigate('HomeLaborer');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login as:</Text>
      <Button title="General Contractor" onPress={() => handleLogin('GC')} />
      <Button title="Supervisor" onPress={() => handleLogin('Supervisor')} />
      <Button title="Laborer" onPress={() => handleLogin('Laborer')} />
    </View>
  );
};

export default LoginScreen;
