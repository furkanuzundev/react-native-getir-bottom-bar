import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Animated, { withSpring } from 'react-native-reanimated';
import { useDerivedValue } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';
import colors from '../../constants/colors';

import dimensions from '../../constants/dimensions';

const LINE_DESC = 10;
const LINE_WIDHT = dimensions.bottomTabDefault.width - LINE_DESC;
const LINE_MARGIN = LINE_DESC / 2;

interface HorizontalProgressProps {
  activeIndex: any;
}

const HorizontalProgress = ({ activeIndex }: HorizontalProgressProps) => {
  const animatedActiveIndex = useDerivedValue(() => {
    return withSpring(activeIndex, { stiffness: 300, damping: 15 });
  });

  const style = useAnimatedStyle(() => {
    const transition =
      animatedActiveIndex.value > 2 &&
      animatedActiveIndex.value < dimensions.TAB_COUNT
        ? dimensions.bottomTabDefault.width * animatedActiveIndex.value +
          (dimensions.BOTTOM_TAB_MENU_EXTRA_WIDTH + dimensions.BOTTOM_TAB_DEC)
        : dimensions.bottomTabDefault.width * animatedActiveIndex.value;

    return {
      transform: [
        {
          translateX: transition,
        },
      ],
    };
  });

  return (
    <View style={styles.row}>
      <Animated.View style={[styles.line, style]} />
    </View>
  );
};

export default HorizontalProgress;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  line: {
    height: 5,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: LINE_WIDHT,
    marginHorizontal: LINE_MARGIN,
  },
});
