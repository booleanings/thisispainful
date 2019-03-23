import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import SurveyScreen from '../screens/SurveyScreen';
import LotteryScreen from '../screens/LotteryScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};


const SurveyStack = createStackNavigator({
  Surveys: SurveyScreen,
});

SurveyStack.navigationOptions = {
  tabBarLabel: 'Sufrvey',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-happy' : 'md-link'}
    />
  ),
};

const LotteryStack = createStackNavigator({
  Lottery: LotteryScreen,
});

LotteryStack.navigationOptions = {
  tabBarLabel: 'Lottery',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-happy' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MapStack,
  SurveyStack,
  LotteryStack
});
