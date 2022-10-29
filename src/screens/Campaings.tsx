import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CampaingsProps {}

const Campaings = (props: CampaingsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Campaings</Text>
      <Text style={styles.text}>1</Text>
      <Text style={styles.text}>2</Text>
    </View>
  );
};

export default Campaings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
