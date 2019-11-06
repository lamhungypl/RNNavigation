import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {withNavigation} from 'react-navigation';
import {DrawerItems} from 'react-navigation-drawer';
import {SafeAreaView} from 'react-native-safe-area-view';
const BurgerMenu = props => {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{top: 'always', horizontal: 'never'}}>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 16,
    width: 24,
  },
  button: {
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    margin: 16,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BurgerMenu;
