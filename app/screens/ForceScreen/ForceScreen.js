import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const ForceScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ForceScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ForceScreen;
