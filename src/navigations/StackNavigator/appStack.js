import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, ForgottenScreen } from '_scenes';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Welcome" component={LoginScreen} />
          <Stack.Screen name="ForgottenPassword" component={ForgottenScreen} />
        </Stack.Navigator>
      );
}

export default AppStack;