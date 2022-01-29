import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { getBottomTabIcon } from '../../utils/bottomtab';
import Icon from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';

import dimensions from '../../constants/dimensions';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';

interface ButtonProps {
  index: Number;
  activeIndex: Number;
  navigation: any;
  route: any;
}

const BottomTabButton = ({
  index,
  activeIndex,
  navigation,
  route,
}: ButtonProps) => {
  const name = getBottomTabIcon({ index });

  const menuButtonScale = useSharedValue(1);

  const onPressIn = () => {
    menuButtonScale.value = withTiming(0.8);
  };

  const onPressOut = () => {
    menuButtonScale.value = withTiming(1);
  };

  const onPress = () => {
    const isFocused = index === activeIndex;
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      navigation.navigate({ name: route.name, merge: true });
    }
  };

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: menuButtonScale.value }],
    };
  });

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={[{ ...dimensions.bottomTabMenu }, styles.container]}
    >
      <Animated.View style={[styles.menu, style]}>
        <Icon
          name={name}
          size={dimensions.bottomTabMenu.iconSize}
          color={colors.yellow}
        />
      </Animated.View>
    </Pressable>
  );
};

export default BottomTabButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    backgroundColor: colors.primary,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 5,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
