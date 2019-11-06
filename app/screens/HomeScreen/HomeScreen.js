import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import WeatherDetailCard from '../../components/WeatherDetailCard/WeatherDetailCard';
import {ScrollView} from 'react-native-gesture-handler';
const HomeScreen = props => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text>HomeScreen</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('Force')}>
          <Text>Detail</Text>
        </TouchableOpacity>
        <View style={styles.weatherDetail}>
          <View style={{borderRightWidth: 1, flex: 1}}>
            <WeatherDetailCard iconName="wind" iconType="feather" />
            <WeatherDetailCard iconName="sun" iconType="feather" />
          </View>
          <View style={{borderLeftWidth: 1, flex: 1}}>
            <WeatherDetailCard iconName="gauge" iconType="entypo" />
            <WeatherDetailCard iconName="gauge" iconType="entypo" />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  weatherDetail: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default HomeScreen;
