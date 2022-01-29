import * as React from 'react';
import {Home, Search, Menu, Profile, Campaings} from '../screens';

import {Routes} from '../types';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTab from './BottomTab';

const RootStack = createBottomTabNavigator<Routes>();
const Stacks = () => {
  return (
    <RootStack.Navigator tabBar={props => <BottomTab {...props} />}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="Search" component={Search} />
      <RootStack.Screen name="Menu" component={Menu} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Campaings" component={Campaings} />
    </RootStack.Navigator>
  );
};

export default Stacks;
