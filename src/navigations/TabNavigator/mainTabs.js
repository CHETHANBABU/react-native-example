import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, SettingsStack } from '_navigations/StackNavigator';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Settings" component={SettingsStack} />
        </Tab.Navigator>
      );
}

export default MainTabs;