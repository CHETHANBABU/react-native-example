import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen, ProfileScreen, EditProfiileScreen } from '_scenes';

const Stack = createStackNavigator();

const SettingsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{ headerLeft: null }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="EditProfile" component={EditProfiileScreen} />
        </Stack.Navigator>
    );
}

export default SettingsStack;