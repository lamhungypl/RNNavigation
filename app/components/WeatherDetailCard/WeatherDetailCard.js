import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const WeatherDetailCard = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Detail</Text>
        <Text>Description</Text>
      </View>
      <View>
        <Icon name={props.iconName} type={props.iconType} color={'black'} />
        <Text>Data</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 5,
  },
});
export default WeatherDetailCard;
