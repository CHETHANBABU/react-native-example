import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, Button, Layout } from '@ui-kitten/components';
const WelcomeScreen = () => {
const { navigate } = useNavigation();

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>WELCOME!</Text>
            <Button appearance='outline' onPress={() => _signInAsync(navigate)}>LOGIN</Button>
        </Layout>
    );
}

const _signInAsync = async (navigate) => {
    await AsyncStorage.setItem('userToken', 'abc');
    navigate('App', { screen: 'Home' });
}

export default WelcomeScreen;