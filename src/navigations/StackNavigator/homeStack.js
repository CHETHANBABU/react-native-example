import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen, FavoritesScreen, FavoritesEditScreen } from '_scenes';
import { Button, Icon } from '@ui-kitten/components';
import { DrawerActions } from 'react-navigation';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import {
  StyleSheet,
} from 'react-native';

const MenuIcon = (style) => (
  <Icon {...style} name='menu' width={20} height={20}/>
);

const HomeStack = ({navigation}) => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={MyDrawer} 
            options={{
            headerLeft: () => (
              <Button style={styles.button} appearance='outline' status='info' size='tiny' icon={MenuIcon}/>
          )}}
          />
          <Stack.Screen name="Favorites" component={FavoritesScreen} />
          <Stack.Screen name="FavoritesEdit" component={FavoritesEditScreen} />
        </Stack.Navigator>
      );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ drawerLabel: 'Favorites' }}
      />
      <Drawer.Screen
        name="FavoritesEdit"
        component={FavoritesEditScreen}
        options={{ drawerLabel: 'FavoritesEdit' }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
  }
});

export default HomeStack;