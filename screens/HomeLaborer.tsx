import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type HomeLaborerNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeLaborer'>;

type Props = {
  navigation: HomeLaborerNavigationProp;
};

const HomeLaborer: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Laborer Dashboard</Text>
      <Button
        title="Clock In / Out"
        onPress={() => navigation.navigate('ClockInOut')}
      />
    </View>
  );
};

export default HomeLaborer;
