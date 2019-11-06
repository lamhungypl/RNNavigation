import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';
const CityCard = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.navigate('home')}>
        <Text>CityCard</Text>
      </TouchableOpacity>
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
export default withNavigation(CityCard);
