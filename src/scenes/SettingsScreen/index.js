import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
    const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Profile" onPress={() => navigate('Profile')} />
    </View>
  );
};

export default SettingsScreen;