import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/navigationTypes';

type HomeGCNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeGC'>;

type Props = {
  navigation: HomeGCNavigationProp;
};

const HomeGC: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GC Dashboard</Text>
      <Button
        title="Manage Employees"
        onPress={() => navigation.navigate('EmployeeManager')}
      />
    </View>
  );
};

export default HomeGC;
