import React from 'react';
import {Platform, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';

import {Icon} from 'react-native-elements';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import ForceScreen from '../screens/ForceScreen';
import CityManagerScreen from '../screens/CityManagerScreen';
import BurgerMenu from '../components/BurgerMenu/';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Force: ForceScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => (
    <Icon name="ios-home" type="ionicon" color={tintColor} />
  ),
  drawerLabel: 'Home',
  drawerIcon: ({tintColor}) => (
    <Icon name="md-home" type="ionicon" color={tintColor} />
  ),
};

const SettingsStack = createStackNavigator({Settings: CityManagerScreen});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({tintColor}) => (
    <Icon name="ios-cog" type="ionicon" color={tintColor} />
  ),
  drawerLabel: 'Settings',
  drawerIcon: ({tintColor}) => (
    <Icon name="md-cog" type="ionicon" color={tintColor} />
  ),
};
const MainNavigator1 = createBottomTabNavigator(
  {HomeStack, SettingsStack},
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      overlayColor: '#6b52ae',
      drawerBackgroundColor: 'rbga(225,225,225,.8)',

      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },
);
// const MainNavigator = Platform.select({
//   ios: createBottomTabNavigator({HomeStack, SettingsStack}),
//   android: createDrawerNavigator(
//     {HomeStack, SettingsStack},
//     {
//       defaultNavigationOptions: {
//         headerTintColor: '#fff',
//         overlayColor: '#6b52ae',
//         drawerBackgroundColor: 'rbga(225,225,225,.8)',

//         headerStyle: {
//           backgroundColor: '#000',
//         },
//       },
//       navigationOptions: {
//         tabBarLabel: 'Home!',
//       },
//     },
//   ),
// });

const AppContainer = createAppContainer(MainNavigator1);
export default AppContainer;
