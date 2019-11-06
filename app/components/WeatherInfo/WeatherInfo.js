import {Text, View, StyleSheet} from 'react-native';
const WeatherInfo = props => {
  return (
    <View style={styles.container}>
      <Text>WeatherInfo</Text>
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
export default WeatherInfo;
