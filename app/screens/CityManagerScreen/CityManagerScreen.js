import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CityCard from '../../components/CityCard';
const arrayTemp = [...Array(5)];
const CityManagerScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text>CityManagerScreen</Text>
        {arrayTemp.map((_, id) => (
          <CityCard key={id} />
        ))}
      </ScrollView>
      <View style={styles.iconAdd}>
        <TouchableOpacity onPress={() => alert('clicked')}>
          <Icon
            style={styles.icon}
            name="pluscircleo"
            type="antdesign"
            size={50}
            color="#6b52ae"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

CityManagerScreen.navigationOptions = {
  headerTitle: 'Settings',
  headerRight: () => {
    return (
      <View style={styles.iconEdit}>
        <TouchableOpacity onPress={() => alert('This is a edit!')}>
          <Icon name="edit" type="feather" />
        </TouchableOpacity>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderWidth: 1,
  },
  iconAdd: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  iconEdit: {
    paddingRight: 20,
  },
});
export default CityManagerScreen;
