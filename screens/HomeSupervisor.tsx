import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type HomeSupervisorNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeSupervisor'>;

type Props = {
  navigation: HomeSupervisorNavigationProp;
};

const HomeSupervisor: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Supervisor Dashboard</Text>
      <Button
        title="Clock In / Out"
        onPress={() => navigation.navigate('ClockInOut')}
      />
    </View>
  );
};

export default HomeSupervisor;
