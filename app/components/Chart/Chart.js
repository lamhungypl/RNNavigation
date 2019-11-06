import {Text, View, StyleSheet} from 'react-native';
const Chart = props => {
  return (
    <View style={styles.container}>
      <Text>Chart</Text>
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
export default Chart;
