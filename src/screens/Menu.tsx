import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../constants/colors';
import images from '../constants/images';

interface MenuProps {}

const Menu = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Image source={images.getirIcon} style={styles.getirIcon} />
        <Text style={[styles.title, { marginTop: 10 }]}>
          Getir app bottom bar with
        </Text>
        <Text style={styles.title}>React Native!</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Follow me on Github{' '}
          <Text style={[styles.text, { fontWeight: 'bold' }]}>
            @furkanuzundev
          </Text>
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go back!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  getirIcon: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 26,
  },
  text: {
    fontSize: 18,
  },
  goBack: {
    width: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
