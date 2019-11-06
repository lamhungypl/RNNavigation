import {Text, View, StyleSheet} from 'react-native';
const Icons = props => {
  return (
    <View style={styles.container}>
      <Text>Icons</Text>
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
export default Icons;
