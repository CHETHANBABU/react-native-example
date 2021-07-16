import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const { navigate } = useNavigation();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button title="Edit" onPress={() => navigate('EditProfile')} />
      </View>
    );
}

export default ProfileScreen;