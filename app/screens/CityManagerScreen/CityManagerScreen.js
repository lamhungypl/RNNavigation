import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const CityManagerScreen = props => {
  return (
    <View style={styles.container}>
      <Text>CityManagerScreen</Text>
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
export default CityManagerScreen;
