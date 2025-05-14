import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useAppContext } from '../contexts/AppContext';

const ClockInOutScreen: React.FC = () => {
  const { activeUser } = useAppContext();
  const [isOnSite, setIsOnSite] = useState(false);

  const handleToggle = () => {
    setIsOnSite(!isOnSite);
  };

  if (!activeUser) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No active user session.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {activeUser.name}</Text>
      <Text>Status: {isOnSite ? 'On Site' : 'Off Site'}</Text>
      <Button
        title={isOnSite ? 'Clock Out (Off Site)' : 'Clock In (On Site)'}
        onPress={handleToggle}
      />
    </View>
  );
};

export default ClockInOutScreen;
