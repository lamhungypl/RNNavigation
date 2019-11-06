import {Text, View, StyleSheet} from 'react-native';
const CityCard = props => {
  return (
    <View style={styles.container}>
      <Text>CityCard</Text>
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
export default CityCard;
