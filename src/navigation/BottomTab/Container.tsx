import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizontalProgress from './HorizontalProgress';
import { useState } from 'react';

import Tab from './Tab';
import Menu from './Menu';

interface ContainerProps {
  state: any;
  route: any;
  navigation: any;
}

const Container = ({ state, navigation }: ContainerProps) => {
  if (state.index === 2) {
    return null;
  }
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {state.routes.map((route: any, index: any) => {
          if (index === 2) {
            return (
              <Menu
                {...{ index, setActiveIndex, activeIndex, navigation, route }}
                key={index}
              />
            );
          }
          return (
            <Tab
              {...{ index, setActiveIndex, activeIndex, navigation, route }}
              key={index}
            />
          );
        })}
      </View>
      <HorizontalProgress {...{ activeIndex }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
  },
});

export default Container;
