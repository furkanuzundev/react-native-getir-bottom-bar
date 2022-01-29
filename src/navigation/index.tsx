import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Root from './Root';
import colors from '../constants/colors';

const Navigation = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
});
