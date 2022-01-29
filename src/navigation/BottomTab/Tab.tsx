import * as React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import { getBottomTabIcon } from '../../utils/bottomtab';
import Icon from '@expo/vector-icons/Ionicons';
import colors from '../../constants/colors';

import dimensions from '../../constants/dimensions';
import Animated, {
  Easing,
  interpolateColor,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';

interface ButtonProps {
  index: Number;
  setActiveIndex: any;
  activeIndex: Number;
  navigation: any;
  route: any;
}


const Tab = ({
  index,
  activeIndex,
  setActiveIndex,
  navigation,
  route,
}: ButtonProps) => {
  const name = getBottomTabIcon({ index });
  const activeIconColor =
    index === activeIndex ? colors.primary : colors.silver;

  const bgColor = useSharedValue(0);

  const onPressIn = () => {
    bgColor.value = withTiming(1, { easing: Easing.circle });
  };

  const onPressOut = () => {
    bgColor.value = withTiming(0, { easing: Easing.circle });
  };

  const onPress = () => {
    bgColor.value = withSequence(
      withTiming(1, { duration: 200 }),
      withTiming(0, { duration: 200 })
    );

    setActiveIndex(index);
    navigate();
  };

  const navigate = () => {
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
    const backgroundColor = interpolateColor(
      bgColor.value,
      [0, 0.5, 1],
      ['rgba(192,192,192,0)', 'rgba(192,192,192,0.2)', 'rgba(192,192,192,0.4)']
    );
    return {
      backgroundColor,
    };
  });

  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      style={[
        { ...dimensions.bottomTabDefault, overflow: 'hidden' },
        styles.container,
      ]}
    >
      <Icon
        name={name}
        size={dimensions.bottomTabDefault.iconSize}
        color={activeIconColor}
      />
      <Animated.View style={[styles.circleScale, style]} />
    </Pressable>
  );
};

export default Tab;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleScale: {
    width: dimensions.BOTTOM_TAB_WIDTH - 10,
    height: dimensions.BOTTOM_TAB_WIDTH - 10,
    borderRadius: 200,
    position: 'absolute',
  },
});
