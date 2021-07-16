import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FavoritesScreen = () => {
    const { navigate } = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
      <Button title="Edit" onPress={() => navigate('FavoritesEdit')} />
    </View>
  );
}

export default FavoritesScreen;