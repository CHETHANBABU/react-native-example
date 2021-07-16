import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStack } from '_navigations/StackNavigator';
import MainTabs from '_navigations/TabNavigator/mainTabs';
import AsyncStorage from '@react-native-community/async-storage';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as light } from '@eva-design/eva';
import AxiosInterceptor from '_utils/services/axios-interceptor';
const Stack = createStackNavigator();

const App = () => {
  AxiosInterceptor();
  return (<AuthCheckRender/>);
  // const token = _bootstrapAsync();
  // return token ? (<AuthCheckRender />) : (<BeforeAuthCheckRender />);
}

const _bootstrapAsync = async () => {
  const userToken = await AsyncStorage.getItem('accessToken');
  return userToken;
}

const AuthCheckRender = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="App" headerMode="none">
            <Stack.Screen name="App">{() => <MainTabs />}</Stack.Screen>
            <Stack.Screen name="Account" component={AppStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
}

const BeforeAuthCheckRender = () => {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Account" headerMode="none">
            <Stack.Screen name="Account" component={AppStack} />
            <Stack.Screen name="App">{() => <MainTabs />}</Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
}

export default App;